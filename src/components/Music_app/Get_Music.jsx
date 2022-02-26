import React from "react";
import style from "./Get_Music.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Get_Music = () => {
 
  return (
    <>
      <div className={"d-flex bg-info p-1 " + style.he}>
        <h5 className="p-1 m-0 text-black-50 text-center">
          Choose your Favourite way to listen to music 
        </h5>
        <div className={"d-flex flex-column fs-5 align-items-center mx-3" }>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active : style.normal
            }
            to="/Music/Mix-Cloud"
            
          >
            MP3 player (MIX CLOUD)
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active : style.normal
            }
            to="/Music/Youtube"
          >
            MP4 Player (YouTube)
          </NavLink>
        </div>
      </div>
      <div className={style.height}>
        <Outlet />
      </div>
    </>
  );
};

export default Get_Music;
