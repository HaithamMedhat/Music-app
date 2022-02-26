import axios from "axios";
import React , {useRef,useState} from "react";
import Display_content from "../UI/Display_content";



export default function MixCloud() {
    const searchInputRef = useRef();
    const [songsData , setSongsData] = useState([]);
    console.log('Get Music')
    const getSearch = ()=>{
      console.log('search');
        const enteredSearch = searchInputRef.current.value;
        getSongs(enteredSearch);
        console.log(enteredSearch);
    }
    const getSongs = async (enteredSearch) => {
        const options = {
          method: "GET",
          url: `https://api.mixcloud.com/search/?q=${enteredSearch}&type=cloudcast`,
        };
        await axios
          .request(options)
          .then(function (response) {
            setSongsData(response.data.data)
          })
          .catch(function (error) {
            console.error(error);
          });
      };
  return (
    <Display_content songsData={songsData} getSearch={getSearch} ref={searchInputRef}/>
  );
}
