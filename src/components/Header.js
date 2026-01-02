import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
const Header = () => {

    let btnName ="Login";
    const [btnNameReact,setbtnNameReact] = useState("Login");
    
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact])



    return (
        <div className="flex justify-between bg-pink-50 sm:bg-yellow-200 shadow-lg mb-2">  
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} />  
            </div>
            <div className="flex items-center " >
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login px-4" 
                    onClick={()=>{
                        btnNameReact==='Login'?setbtnNameReact("Logout"): setbtnNameReact("Login");
                    }}> 
                    {btnNameReact} 
                    </button>
                </ul>
            </div>    
        </div>
    )
}

export default Header;