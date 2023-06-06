import AboutUsShowcase from "./aboutusshowcase"
import { RiPlantLine } from 'react-icons/ri'
import { BsBoxSeam } from 'react-icons/bs'
import { FiPhoneOutgoing } from 'react-icons/fi'
import "./aboutus.css"

function AboutUs( ){
    return(
        <div className="about-us">
            <div className="title">
                <h2 id ="about">About us</h2>
                <h3 id = "about-descript">Order now and appreciate the beauty of nature</h3>
            </div>
            <div className="info">
                <AboutUsShowcase DescriptTitle="Large Assortment" Description="we offer many different types of products with fewer variations in each category." Icon={RiPlantLine}></AboutUsShowcase>
                <AboutUsShowcase DescriptTitle="Fast & Free Shipping" Description="4-day or less delivery time, free shipping and an expedited delivery option." Icon={BsBoxSeam}></AboutUsShowcase>
                <AboutUsShowcase DescriptTitle="24/7 Support" Description="answers to any business related inquiry 24/7 and in real-time." Icon={FiPhoneOutgoing}></AboutUsShowcase>
            </div>
        </div>
    )
}

export default AboutUs