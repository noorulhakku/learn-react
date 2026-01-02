import { useState, useEffect } from "react";
import { mockMenuData } from "../utils/mockMenuData";
import { CDN_URL_ID } from "../utils/constant.js";
import Shimmer from "./Shimmer";
import { Route, useParams } from "react-router"; // Get the dynamic id
import { MENU_API } from "../utils/constant.js"; // Get the dynamic id



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
   
    // only one time load will call this API so use [] arguments in useEffects
    useEffect (() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        /*const = await fetch(MENU_API + resId);*/       
       const getMockMenuData = mockMenuData?.data;
       setResInfo(getMockMenuData);


    };
    if(resInfo === null) return <Shimmer /> ;
    const {name,cuisines,cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    const getMockMenuDataDT = itemCards?.map((item)=>item?.card.info);
   // const Image = CDN_URL_ID+resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId;
    //const  = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
    
    console.log(getMockMenuDataDT)
    
    return (
        <div className="">
         
            <h1>{name}</h1>
            <h5>{cuisines.join(",")}</h5>
            <h2>Menu</h2>
            <ul>         
                {itemCards.map(item => 
                <li key={item.card.info.id}>{item.card.info.name} - {"RS -" + item.card.info.price/100} </li> )}               
            </ul>
        </div>

    );

};

export default RestaurantMenu;