import './homeblock.css'
import PlantImage from '../../src/unsplash_cLaaxa4DSnc-removebg-preview 1.png'

function HomeBlock(){
return(
    <div className="outer-block">
        <div className="home-text">
            hello
        </div>
        <div className='graphic'>
            <div className="circle"></div>
            <img src={PlantImage}></img>
        </div>
    </div>
)
}
export default HomeBlock