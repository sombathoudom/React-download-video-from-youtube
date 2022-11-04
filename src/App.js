import React ,{useState,useEffect}from 'react';
import { fetchYoutubeSearch } from './api/Api.js';
import { downloadYoutubeToMp3 } from './api/DownloadApi.js';
import './App.css';

function App() {
  const [query, setQuery] = useState('Vannda');
  const [Music,setYoutubeMusic] = useState([]);
  const [buttonText, setButtonText] = useState('Downloading...');
  const [loading, setLoading] = useState('');
  const [request, setRequest] = useState(false);
  useEffect(() => {
    if(request === false) {
      handleData(query);
      setRequest(true);
    }
  },[query,request]);

  const handleData = async (query) => {
    const data = await fetchYoutubeSearch(query);
    setYoutubeMusic(data);
    setQuery('');
  }
  const search = async(e)=>{
    if(e.key === 'Enter') {
      e.preventDefault();
      handleData(query);
    }
  }
  const clickDownload = async (e) => {
    e.preventDefault();
    setLoading(e.target.value);
    setButtonText('Downloading...')
    const data =  await downloadYoutubeToMp3(e.target.value);
    if(data) {
      window.open(data?.result?.download_url, '_blank', 'noopener,noreferrer');
      setButtonText('Downloaded')
    } 
  }
  return (
    <div className="App">
      <form>
        <input type="search" required  value={query} onChange={(e)=>setQuery(e.target.value)} onKeyPress={search}/>
        <i className="fa fa-search"></i>
      </form>
        {Music?.result?.songs.map((ele,i) => {
            return(
                  <div className="row1-container" key={i}>
                        <div className="box box-down cyan">
                          <h2>{ele.name}</h2>
                          <p>{ele.title}</p>
                          <img src={ele.thumbnail} alt=""/>
                            <button className={loading === ele.id ? 'button-css-disabled' : 'button-css'} value={ele.id} onClick={clickDownload} key={i} disabled={loading === ele.id ? true : false} >
                              {loading === ele.id ? buttonText : 'Download'}
                            </button>
                        </div>
                  </div>
                )
        })}
    </div>
  );
}

export default App;
