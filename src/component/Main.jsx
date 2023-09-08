import React from "react";
import video from '../assets/retro.mp4';

function Main () {
    return (
        <>
        <div className="maincontainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted />
                <div className="containers">
                    <h2 className="clr">Welcome</h2>
                    <h1 className="title"> Traveler </h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main;