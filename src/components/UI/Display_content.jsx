import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";

const Display_content = React.forwardRef((props , ref)=> {
    const {songsData , songsDataYoutube, getSearch} = props;
    const [songs,setSongs] = useState([]);
    const [height , setHeight] = useState('200px')
    const value = ref.current? ref.current.value : ' ';
    useEffect(()=>{
        if(songsData){
            setSongs(songsData);
        }else{
            setSongs(songsDataYoutube);
            setHeight('350px')
        }
    },[value])
  return (
    <div className=" p-5">
      <div className="w-75 m-auto ">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass p-1"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            ref={ref}
          />
          <button className="btn btn-outline-danger" onClick={getSearch}>Search</button>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
          {songs.map((e,i)=>{
              console.log(e)
              return( <React.Fragment>
                <div className="d-flex" key={i}>
                <ReactPlayer
                height={height}
                url={e.url}
                style={{'margin' : '10px 0'}}
                />
              </div>
              </React.Fragment>
              )
          })}
      </div>
    </div>
  )
})


export default Display_content;