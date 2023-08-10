import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchImages = createAsyncThunk(
    'content/fetchImages',
    async (roverData) => {
        const {apiKey, camera, date} = roverData;
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&camera=${camera}&earth_date=${date}`;
        const res = await axios(url);
        const images = res.data;
        return images;
    }
)

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        images: [],
        status: "loading",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchImages.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.status = 'success';
            state.images = action.payload;
        })
        builder.addCase(fetchImages.rejected, (state) => {
            state.status = 'failure';
        })
    },
});

const imagesReducer = imagesSlice.reducer;
export default imagesReducer;