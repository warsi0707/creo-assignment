import { memo } from "react"

function PriceCard({className,item}){
    return (
        <div className={`bg-green-500 w-full p-2 h-60 flex flex-col gap-5 rounded-4xl justify-center items-center ${className}`}>
            <p className="text-4xl">Under {item}/-</p>
            <button className="flex items-center bg-white p-2 px-5 rounded-xl">
                <p>Shop Now</p>
                <i className="fa-solid fa-greater-than"></i>
            </button>
        </div>
    )
}
export default memo(PriceCard)