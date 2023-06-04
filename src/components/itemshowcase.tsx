import './itemshowcase.css'

interface ItemShowcaseProps{
    ItemName: string;
    ItemPrice: string;
    ItemImgPath: string;
}

function ItemShowcase(props:ItemShowcaseProps){
    return(
        <div className="item-box">
            <img src= {props.ItemImgPath} alt="picture of plant" id="plantimage"></img>
            <div className="item-info">
                <span className="item-name">{props.ItemName}</span>
                <br></br>
                <span className='item-price'>{props.ItemPrice}</span>
            </div>
        </div>
    )
}

export default ItemShowcase;