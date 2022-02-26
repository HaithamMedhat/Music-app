import React from "react";
import img from "../../images/ba3.jpg";
import NavigationBar from "./NavigationBar";
import style from "./Home.module.css";
import About from "./About";
import Footer from './Footer';

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <div
          style={{
            background: `
            linear-gradient(rgba(0, 0, 0, .6),rgba(0, 0, 0, .6)),
            url(${img})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          className="vh-100"
        >
          
          <div className="d-flex flex-coulmn align-items-center justify-content-center vh-100">
            <h4 className={style.heading}>Just Listen...</h4>
          </div>
        </div>
      </header>
        <About />   
        <Footer/>
    </React.Fragment>
  );
}
