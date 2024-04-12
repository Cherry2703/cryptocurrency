import React from "react"

import { PiHandWavingFill } from "react-icons/pi";


import "./ProfileInfo.css"

const ProfileInfo=()=>{
    return(
        
            <div className="profile-container">
                <div className="profile-container-text">
                    <div className="name-icon-cont">
                        <h2>Hello, <span className="profile-name">Brooklyn Simmons</span></h2>
                        <PiHandWavingFill className="handwave-icon"/>
                    </div>
                    <h2>Welcome to <span className="spot-trading-text">Spot trading !</span></h2>
                </div>
                <div>
                    <button type="button" className="start-trading-btn">Start Trading</button>
                </div>
            </div>
        
    )
}

export default ProfileInfo