import { useState } from "react";
import { Link } from "react-router";
import Hambergmenu from './HambergMenu.jsx'

export default function Navbar(){
    const [hambergMenu, setHambergMenu] = useState(false)
    return (
       <>
         <div className="w-full p-5 space-y-2 md:px-20 border-b">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <button onClick={()=> setHambergMenu(true)} className="text-4xl cursor-pointer"><i className="fa-solid fa-bars"></i></button>
                    <Link to={"/"}>
                        <img src="/logo.png" className="w-18" alt="" />
                    </Link>
                </div>
                <div className="hidden md:flex w-full bg-green-pirmary outline-none rounded-full  items-center px-5">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" className="w-full p-5 outline-none" />
                </div>
                <div className="flex gap-2 items-center text-2xl">
                    <button><i className="fa-regular fa-heart"></i></button>
                    <button><i className="fa-solid fa-bag-shopping"></i></button>
                    <button><i className="fa-solid fa-user"></i></button>
                </div>
            </div>
            <div className="md:hidden w-full bg-green-pirmary outline-none rounded-full flex items-center px-5">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" className="w-full p-5 outline-none" />
                </div>
        </div>
        {hambergMenu && <Hambergmenu setHambergMenu={setHambergMenu}/>}
       </>
    )
}