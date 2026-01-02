import {BANNER_URL_IMAGE} from "../utils/constant.js";
const WhatsOnMind = (props) => {
    const {bannerData } = props;   
    const {imageId} = bannerData;    
    return (     
      
    <div className="flex-shrink-0">

      <div className="w-32 h-30 overflow-hidden ">
        <div className="mind-card">
          <img className="w-full h-full object-cover"
            src={ BANNER_URL_IMAGE + imageId}
            alt="Cakes"
          />
        </div>
      </div>
    </div>

    )
}
export default WhatsOnMind;