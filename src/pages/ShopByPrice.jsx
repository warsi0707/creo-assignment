import PriceCard from "../components/PriceCard";

export default function ShopByPrice(){
    return (
        <div className="w-full h-96  space-y-3">
            <h1 className="text-5xl">Shop By Price</h1>
            <div className="flex gap-2 h-full">
                <PriceCard item={'199'} className={"bg-green-secondary"}/>
                <PriceCard item={"499"} className={"bg-pink-primary"}/>
                <PriceCard item={"999"} className={"bg-yellow-primary"}/>
            </div>
        </div>
    )
}