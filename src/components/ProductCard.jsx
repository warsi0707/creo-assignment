import { memo } from "react"
import { Link } from "react-router"

function ProductCard({img}){
    return (
        <Link to={""} className="h-80 w-60 rounded-2xl border border-gray-300 shadow-lg relative">
            <button className="absolute left-5 top-2 text-2xl text-green-secondary"><i className="fa-regular fa-heart"></i></button>
            <img src={img} alt="" className="h-52 rounded-t-2xl" />
           <div className="p-2 flex flex-col  justify-between space-y-2">
             <p className="text-wrap text-xl"> Precious Glue Pen with Glitter</p>
             <div className="flex items-center">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <p>500.00</p>
             </div>
           </div>
        </Link>
    )
}
export default memo(ProductCard)