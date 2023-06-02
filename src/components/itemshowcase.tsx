import './itemshowcase.css'
import StockPlant from '../plant.jpg'

function ItemShowcase(){
    return(
        <div className="item-box">
            <img src= {StockPlant} alt="picture of plant" id="plantimage"></img>
            <div className="item-info">
                <text className="item-name">Artificial Plants</text>
                <br></br>
                <text className='item-price'>$30.00</text>
            </div>
        </div>
    )
}

export default ItemShowcase;