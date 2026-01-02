import {CDN_URL,CDN_URL_ID} from "../utils/constant.js";
const RestaurantCard = (props) => {
    const {resData } = props;   
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData;
    //console.log(resData)
    return (
        <div className="m-4 p-3 w-48 h-[90%] bg-gray-200 hover:bg-gray-400"> 
            <img className="h-36 w-48 rounded-lg" src={ CDN_URL_ID + cloudinaryImageId} alt="Logo" />
            <h2 className="font-bold text-md line-clamp-2">{name}</h2>     
             <h3 className="cuisines">{cuisines.join(" , ")}</h3>    
             <h3>{avgRating+" stars"}</h3>            
             <h3 className="text-sm mt-1 text-gray-600">{costForTwo}</h3>             
            <div className="flex justify-between text-sm mt-2">
            <span>⭐ {avgRating}</span>
            <span>{sla.slaString}</span>
            </div>    
        </div>
    )
}
export default RestaurantCard;