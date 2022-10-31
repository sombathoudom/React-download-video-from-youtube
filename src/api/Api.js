import axios from 'axios';
export const fetchYoutubeSearch = async(q) => {
    const url = 'https://youtube-music1.p.rapidapi.com/v2/search';
    const options = {
        params: {query: q},
        headers: {
          'X-RapidAPI-Key': '1234296a0dmshaf9e37ed864df53p16adf2jsn4bb428172cb1',
          'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
      };
    const {data} = await axios.get(url,options);
    return data;
}
