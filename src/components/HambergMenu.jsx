import { Link } from "react-router";
import MenuBarLink from "./MenuBarLink";

export default function hambergMenu({setHambergMenu}){
    return (
        <div onClick={()=> setHambergMenu(false)} className="bg-black/70 min-h-screen w-full fixed top-0 left-0 z-50">
            <div onClick={(e)=> e.stopPropagation()} className="bg-white w-1/3  h-full fixed p-3 ">
                <div className="flex justify-end"><button onClick={()=> setHambergMenu(false)} className="cursor-pointer border-2 text-xs border-gray-500 px-1"><i className="fa-solid fa-xmark"></i></button></div>
                <div className="p-8 flex flex-col  gap-5">
                    <MenuBarLink link={"/"} title="Home" text={"Home"}/>
                    <MenuBarLink link={"/"} title="About " text={"About Us"}/>
                    <MenuBarLink link={"/"} title="Shop" text={"Shop"}/>
                    <MenuBarLink link={"/"} title="Cart" text={"Cart"}/>
                    <MenuBarLink link={"/"} title="Contact" text={"Contact"}/>
                </div>
            </div>
        </div>
    )
}