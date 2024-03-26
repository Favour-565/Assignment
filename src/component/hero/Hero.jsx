import React from 'react'
import HeroImage from "../../assets/image.png"
import "./hero.css"


const Hero = () => {
    return (

        <div className="body">
            <div className="left">
                <div className="txt">
                    <p className="welcome">Hi there!</p>
                    <h1 className="intro"><span>LUXE</span> IS HERE TO  BE YOUR  ASSISTANCE</h1>
                    <p>I am here ready  to help you in making creative digital products</p>
                </div>
                <button className="btn">Let's Discuss</button>

            </div>

            <div className="right">
                <img src={HeroImage} alt="" />


            </div>
        </div>
    )
}

export default Hero