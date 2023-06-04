import ItemShowcase from "./itemshowcase"
import {BsArrowRight} from 'react-icons/bs'
import  "./bestsellers.css"

function BestSellers(){
    return(
        <div className="best-sellers">
            <div className="description-box">
                <h2 id = "heading">Best Selling Plants</h2>
                <h3 id = "subheading">Easiest way to a healthy life by buying your favorite plants</h3>
                <button id ="see-more">See more<BsArrowRight size={24} color="black"/></button>
            </div>
             <ItemShowcase ItemName='Artificial Plant' ItemPrice='$30.00' ItemImgPath="/plant.jpg"></ItemShowcase>
             <ItemShowcase ItemName="Artificial Plant" ItemPrice="$20.00" ItemImgPath="/stockplant1.jpg"></ItemShowcase>
             <ItemShowcase ItemName="Artifiical Plant" ItemPrice="$25.00" ItemImgPath="/stockplant2.jpg"></ItemShowcase>
        </div>
    )
}

export default BestSellers