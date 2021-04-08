import axios from 'axios'

const KEY = "AIzaSyBLYnA3f4tORCcJPQefh-JpViu-e3Rh44U"

export default axios.create({
    baseURL:" https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});