export const postFormData = async (apiKey, camera, date) => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&camera=${camera}&earth_date=${date}`;
    const response = await fetch(url);
    return response.json();
}