import './homeblock.css'
import PlantImage from "../../public/handplant.png"
import SearchBar from './searchbar'

function HomeBlock(){
return(
    <div className="outer-block">
        <div className="home-text">
            <h1 id="slogan">Buy your <br></br> Dream Plants</h1>
            <div className="sub-text">
                <h2 className="store-stats">50+<br></br> Plant Species</h2>
                <div className="vertical-line"></div>
                <h2 className="store-stats">100+<br></br>Customers</h2>
            </div>
            <SearchBar></SearchBar>
        </div>
        <div className='graphic'>
            <div className="circle"></div>
            <img src={PlantImage} alt="hand carrying a plant" id="carriedplant"></img>
        </div>
    </div>
)
}
export default HomeBlock