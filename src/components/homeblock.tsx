import './homeblock.css'
import PlantImage from '../../src/unsplash_cLaaxa4DSnc-removebg-preview 1.png'
import SearchBar from './searchbar'

function HomeBlock(){
return(
    <div className="outer-block">
        <div className="home-text">
            <h1 id="slogan">Buy your <br></br> Dream Plants</h1>
            <div className="sub-text">
                <h2>50+<br></br> Plant Species</h2>
                <div className="vertical-line"></div>
                <h2>100+<br></br>Customers</h2>
            </div>
            <SearchBar></SearchBar>
        </div>
        <div className='graphic'>
            <div className="circle"></div>
            <img src={PlantImage}></img>
        </div>
    </div>
)
}
export default HomeBlock