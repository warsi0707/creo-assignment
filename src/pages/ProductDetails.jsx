import { useState } from "react"
import { Link } from "react-router"

export default function ProductDetails(){
    const [count, setCount] = useState(1)
    const [activeImage, setActiveImage] = useState("/12.png")
    return(
        <div className="w-full min-h-screen pb-32">
            <div className="w-full min-h-screen flex flex-col md:grid grid-cols-7 p-5 md:px-20 gap-5 py-5">
            <div className="w-full col-span-3 h-full space-y-5">
                <img src={activeImage} alt="" className="h-96 w-full" />
                <div className="flex justify-between gap-1 overflow-hidden scroll-mx-10">
                    <button onClick={()=> setActiveImage("/12.png")} className={`cursor-pointer   ${activeImage ==="/12.png" && "border-4 border-green-secondary"}`}>
                        <img src="/12.png" alt="" className="h-32 w-40" />
                    </button>
                    <button  onClick={()=> setActiveImage("/11.png")} className={`cursor-pointer  ${activeImage ==="/11.png" && "border-4 border-green-secondary"}`}>
                        <img src="/11.png" alt="" className="h-32 w-40" />
                    </button>
                    <button  onClick={()=> setActiveImage("/10.png")} className={`cursor-pointer ${activeImage ==="/10.png" && "border-4  border-green-secondary"}`}>
                        <img src="/10.png" alt="" className="h-32 w-40" />
                    </button>
                    
                </div>
            </div>
            <div className="w-full col-span-4 h-full p-3 space-y-5 ">
                <h1 className="border-b text-4xl text-wrap py-2">Mesh Multi-Utility Pouch – Buttercup Yellow</h1>
                <div className="space-y-5 border-b pb-2">
                    <div className="flex items-center gap-1 text-2xl text-green-secondary">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <p className="">2600.00</p>  
                </div>
                    <p>Brighten your space with the Buttercup Yellow Mesh Pouch! 
                        A cute and durable organizer for stationery, makeup, or travel essentials. Lightweight, see-through, and perfect for gifting — ideal for stationery lovers and cute gift ideas under ₹500.
                    </p>
                    <p>Disclaimer: Color of the actual product may vary from the image. Expect a slight variation from the image displayed.</p>
                    <p className="text-green-secondary ">2 in stock</p>
                </div>
                <div className="flex gap-5">
                    <div className="border flex w-32 items-center justify-between p-">
                        <button onClick={()=> setCount(prev=> prev-1)} className="border-r p-2 cursor-pointer hover:bg-green-pirmary bg-green-secondary"><i className="fa-solid fa-minus"></i></button>
                        <p>{count}</p>
                        <button onClick={()=> setCount(prev=> prev+1)} className="border-l p-2 cursor-pointer hover:bg-green-pirmary bg-green-secondary"><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <button  className="bg-gray-primary text-white px-3 cursor-pointer">ADD TO CART</button>
                </div>
            </div>
            </div>
            <div className="w-full md:px-20 min-h-screen px-5 space-y-5 pb-10">
                <div className="flex justify-center items-center border-gray-400 border-t border-b ">
                    <p className="border-t-2 border-b-2 border-green-secondary text-green-secondary p-3">Description</p>
                </div>
                <div className="space-y-5">
                    <p>Description</p>
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold">Mesh Pouch – Colour: Buttercup Yellow</p>
                        <p>Bright, joyful, and practical — the Buttercup Yellow Mesh Pouch is your go-to organizer for stationery, makeup, or travel accessories. Its cheerful color and versatile design make it perfect for teens, moms, and stationery lovers alike.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold">Premium Mesh Material</p>
                        <p>Crafted from durable, breathable mesh that’s lightweight yet strong, the pouch keeps your essentials visible and easy to access.</p>
                    </div>
                     <div className="space-y-2">
                        <p className="text-2xl font-semibold">Compact Yet Spacious</p>
                        <p>It’s sleek but roomy enough for pens, cosmetics, chargers, or travel-sized toiletries — ideal for school, office, or vacations.</p>
                    </div>
                     <div className="space-y-2">
                        <p className="text-2xl font-semibold">Cute & Giftable</p>
                        <p>Looking for cute gift ideas under ₹500 in India? This bright yellow pouch is the perfect choice — stylish, practical, and full of charm.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold">Perfect for Everyone</p>
                        <p>Kids, moms, and professionals will love using it as a stationery pouch, cosmetic bag, or travel kit.</p>
                    </div>
                </div>
                <div>
                     <p className="text-2xl font-semibold">Highlights</p>
                        <li>Cute Buttercup Yellow design</li>
                        <li>Multipurpose storage use</li>
                        <li>Transparent mesh for quick vi   ibility</li>
                        <li>Lightweight & travel-friendly</li>
                        <li>Affordable and durable everyday essential</li>
                </div>
                <div>
                     <p className="text-2xl font-semibold">Specifications</p>
                        <li><strong>Material</strong>: Buttercup Yellow</li>
                        <li><strong>Color</strong>: Premium Mesh</li>
                        <li><strong>Type</strong>: Multipurpose Organizer</li>
                        <li><strong>Closure </strong>: Zipper</li>
                        <li><strong>Weight </strong>: Lightweight</li>
                        <p>Bring happiness to your daily routine with the Mesh Pouch – Buttercup Yellow. It’s cute, compact, and the perfect “little thing” to make life brighter.</p>
                </div>
            </div>
            <div className="border-t border-b w-full flex px-5 justify-center md:px-20">
               <div className="flex  justify-end border-r p-5">
                 <Link to={""} className="flex items-center gap-3">
                 <div className="bg-gray-primary text-white p-3 px-4 rounded-full">
                    <i class="fa-brands fa-square-x-twitter t"></i>
                 </div>
                    <p>Tweet This Prodcut</p>
                </Link>
               </div>
               <div className="flex  justify-end border-r p-5">
                 <Link to={""} className="flex items-center gap-4">
                 <div className="bg-gray-primary text-white p-3 px-4 rounded-full">
                    <i className="fa-brands fa-facebook"></i>
                 </div>
                    <p>Share on Facebook</p>
                </Link>
               </div>
               <div className="flex  justify-end p-5 ">
                 <Link to={""} className="flex items-center gap-3">
                 <div className="bg-gray-primary text-white p-3 px-4 rounded-full">
                    <i className="fa-solid fa-envelope"></i>
                 </div>
                    <p>Mail This Prodcut</p>
                </Link>
               </div>
            </div>
        </div>
    )
}