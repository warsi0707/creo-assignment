import { memo } from "react"

function CollectionCard({img}){
    return(
        <div className="h-96 w-60 bg-green-pirmary rounded-3xl">
            <img src={img} alt="" className="h-[350px] rounded-3xl" />
            <div className="flex text-xl justify-center text-gray-primary">
                <p>fashions</p>
            </div>
        </div>
    )
}
export default memo(CollectionCard)