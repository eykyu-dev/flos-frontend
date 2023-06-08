import "./categories.css"
import {BsArrowRight} from 'react-icons/bs'

function Categories(){
    return(
        <div className="categories-section">
            <div className="title">
                <h2 id="header-title">Categories</h2>
                <h3 id="category-descript">Find what you are looking for</h3>
            </div>

            <div className="categories">
                <div className="category-box">
                    <img src="/stockplant3.jpg" alt="picture of plants" className="picture"></img>
                    <span className="category-title">Natural Plants</span>
                </div>

                <div className="category-box">
                    <img src="/stockplant4.jpg" alt="picture of plants" className="picture"></img>
                    <span className="category-title">Plant Accessories</span>
                </div>

                <div className="category-box">
                    <img src="/stockplant5.jpg" alt="picture of plants" className="picture"></img>
                    <span className="category-title">Artificial Plants</span>
                </div>
            </div>

            <div id="explore-button">
                <button id ="explore">Explore<BsArrowRight size={24} color="black"/></button>
            </div>
            
        </div>
    )
}
export default Categories