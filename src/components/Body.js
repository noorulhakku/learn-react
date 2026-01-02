import RestaurantCard from "./RestaurantCard";
import WhatsOnMind from "./WhatsOnMind";
import { reslist } from "../utils/mockData";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {    
//state variable
const [listOfRestraurants, setlistOfRestraurants ]= useState([]);
const [filterRestraurants, setfilterRestraurants ]= useState([]);
const [bannerRestraurants, setbannerRestraurants ]= useState([]);
const [searchText, setsearchText ]= useState("");

console.log("body rendered")
useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () => {
    const data = await fetch(
      //  "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.08950&lng=80.27390&str=restrautrant%20in%20chennai&trackingId=undefined&submitAction=ENTER&queryUniqueId=8793d7cb-04ea-3e5d-4bea-adaa81c0dd3b"      
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

       "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );   
    const jsond = await data.json();   
    const cards = jsond?.data?.cards[1];  
    console.log(jsond);
    //Option chaining ?
    const restaurantData = cards?.card?.card?.gridElements?.infoWithStyle?.restaurants;     
      
    const getAllRestraurantList = restaurantData?.map((item)=>item?.info);
    setlistOfRestraurants(getAllRestraurantList);
    setfilterRestraurants(getAllRestraurantList);   
    console.log(getAllRestraurantList);

    const whatOnMind = jsond?.data?.cards[0];
    const whatOnMindData = whatOnMind?.card?.card?.imageGridCards?.info || [];      
    setbannerRestraurants(whatOnMindData);
  

   // const restaurantData = cards?  
}




/*
//Condition Rendering -> rending based on condition is known as condition rendering
if(listOfRestraurants.length===0){
    return <h1><Shimmer/></h1>;
}*/

return listOfRestraurants.length===0? ( // condition Rendering
    <h1><Shimmer/></h1>
) : (
        <div className="body">             
            <div className="filter flex">
                <div className="search p-4  m-3">
                    <input type ="text" className="border border-solid border-black" value={searchText.toLowerCase()}
                    onChange={(e)=>{
                        setsearchText(e.target.value)    
                    }}>                        
                    </input>
                    <button className= "px-3 p-1 bg-green-100 m-1 rounded-lg"  onClick={
                        ()=>{
                            //Filter the restraunt cards and update the UI   
                            //searchText
                            const filterRest =  listOfRestraurants.filter(
                                    (res)=>res.name.includes(searchText)
                            ) 
                            console.log(searchText)   
                            setfilterRestraurants(filterRest);

                        }       
                    } >search</button>
                </div>
            <div className="p-4 m-3">
                <button className="px-4 p-1  bg-gray-100 m-1 rounded-lg" name ="filterbtn" 
                onClick={()=>{
                  const restaurantList = listOfRestraurants.filter(
                    (res)=>res.info.avgRating>4.6
                    );
                   // console.log(restaurantList)
                    setlistOfRestraurants(restaurantList); //Update while click the button
                }}
                >Top Rated Restaurants</button>
                 </div>
             </div>

 
            <div className= "p-4 m-2"> 
                <h2 className="text-2xl font-bold mb-4">What’s on your mind?</h2><br/><br/>
                 <div className="flex flex-wrap ">

                {
                    
                       bannerRestraurants.map(banner => 
                         <WhatsOnMind 
                         key ={banner.id}
                         bannerData={banner} />
                    )
                }  
                </div>
            </div>  
            <br/><br/>

            
            <div className=""> 
                <h2 className="text-2xl font-bold mb-4">Top restaurant chains in Chennait</h2>
                <div className="flex flex-wrap flex-1 mt-3">
                {
                    filterRestraurants.map(restaurant => 
                        
                        <Link key ={restaurant.id} to={"/restaurants/"+restaurant.id}>                <RestaurantCard 
                         key ={restaurant.id}
                         resData={restaurant} /></Link>
                    )
                }    
                </div>      
            </div>    
        </div>
    )
}

export default Body;