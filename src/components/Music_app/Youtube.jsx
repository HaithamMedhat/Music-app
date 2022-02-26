import axios from "axios";
import React, { useRef, useState } from "react";
import Display_content from "../UI/Display_content";



export default function Youtube() {
  const searchInputRef = useRef();
  const [songsData, setSongsData] = useState([]);
  
  const getSearch = () => {
    const enteredSearch = searchInputRef.current.value;
    getSongs(enteredSearch);
  };
  const getSongs = async (enteredSearch) => {
    
    const options = {
        method: 'GET',
        url: 'https://simple-youtube-search.p.rapidapi.com/search',
        params: {query: enteredSearch , safesearch: 'false'},
        headers: {
          'x-rapidapi-host': 'simple-youtube-search.p.rapidapi.com',
          'x-rapidapi-key': '16c326f123msh1d95f2b50957b42p18ef0bjsn82f5de72b893'
        }
    };
    await axios
      .request(options)
      .then(function (response) {
        setSongsData(response.data.results)
      })
      .catch(function (error) {
      });
  };
  return (
    <Display_content songsDataYoutube={songsData} getSearch={getSearch} ref={searchInputRef}/>
    
  );
}
