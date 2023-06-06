import { IconType } from 'react-icons';
import "./aboutusshowcase.css"

interface AboutUsShowcaseProps{
    DescriptTitle: string;
    Description: string;
    Icon?:IconType;

}
function AboutUsShowcase(props:AboutUsShowcaseProps){
    return(
        <div className="descript-box">
            {props.Icon && <div className="icon">{<props.Icon />}</div>}
            <h2 id="descript-title">{props.DescriptTitle}</h2>
            <h3 id="description">{props.Description}</h3>
        </div>
    )
}

export default AboutUsShowcase