import { bannerHeaderProps } from "../types";

const imageStyle = {
    width: '100%'
}

export default function BannerHeader(props: bannerHeaderProps) {

    const textColorStyle = {
        color: props.textColor
    }

    return  <div className="headerContainer">
    <img src={props.image} alt="bannerImage" style={imageStyle}/>
    <div className="centeredText" style={textColorStyle}>{props.text}</div>
  </div> 
}