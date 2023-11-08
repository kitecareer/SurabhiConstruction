import React from "react";
import MainVideo from './video.mp4'
import './Home.css'
export const Header = (props) => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={MainVideo} type='video/mp4'/>
        </video>
       
        <div className="hero-text">
        <div className='logo'>
        <img src=
                  {props.data ? props.data.logoImage : "Loading"}
                  height='200'
             width="400"
              alt=''
              loading='lazy'
                 
                />
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-default btn-lg page-scroll"
                > Learn More
                  
                </a>{" "}
      </div>
            
              {/* <div className="btn-group">
                <button className="btn" ><a href="/about">Learn More</a></button>
              <button className="btn btn-outline">Documentation</button> 
                <button className="btn btn-outline"><a href='/contact'>FAQ</a></button>
            </div>*/}
        </div>
            
        </div>
      
  );
};
