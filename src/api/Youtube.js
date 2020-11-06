import axios from 'axios';
const KEY = 'AIzaSyDpuj_mm8Eg4pQoeNJyKssVZCAzBC1uJMo';
export default axios.create({
    baseURL:'://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:'5',
        videoType:'any',
        order:'title'
    }
});
