import React from 'react'
import Brand from "../../assets/Branding.png"
import Design from "../../assets/Ui Design.png";
import Product from "../../assets/Product.png";
import "./service.css"

const Service = () => {
    return (
        <div>
            <div className="last-section">
                <h1>OUR SERVICE</h1>
                <div className="cards">
                    <div className=" card card-1">
                        <img src={Brand} alt="branding" />
                        <h3>Branding</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    </div>

                    <div className="  card card-2">
                        <img src={Design} alt="ui" />
                        <h3>Branding</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    </div>

                    <div className="  card card-3">
                        <img src={Product} alt="product" />
                        <h3>Branding</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service