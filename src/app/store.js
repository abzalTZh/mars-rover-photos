import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../features/images/imagesSlice';

const store = configureStore({
    reducer: {
        images: imagesReducer
    },
});

export default store;