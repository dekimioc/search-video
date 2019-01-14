import axios from "axios";

const KEY = "AIzaSyAPOruvdldu2t2i4kDg0luCJ0tVHLKYPxc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})