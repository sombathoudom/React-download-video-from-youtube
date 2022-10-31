import axios from 'axios';
export const downloadYoutubeToMp3 = async(vId) => {
    const url = 'https://youtube-music1.p.rapidapi.com/get_download_url';
    const options = {
        params: {id: vId,ext: 'mp3'},
        headers: {
          'X-RapidAPI-Key': '1234296a0dmshaf9e37ed864df53p16adf2jsn4bb428172cb1',
          'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
      };
    const {data} = await axios.get(url,options);
    return data;
}
