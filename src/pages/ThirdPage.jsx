import CollectionCard from "../components/CollectionCard";

export default function ThirdPage(){
    return (
        <div className="w-full min-h-screen">
            <div>
                <img src="/12.png" className="rounded-2xl" alt="" />
            </div>
            <div className="space-y-2">
                <div className="border-b-8 border-green-secondary p-5 text-6xl">
                    <h1>Check Our Collections</h1>
                </div>
                <div className="flex flex-wrap justify-between gap-3">
                    <CollectionCard img={"/12.png"}/>
                    <CollectionCard img={"/13.png"}/>
                    <CollectionCard img={"/14.png"}/>
                    <CollectionCard img={"/15.png"}/>
                    <CollectionCard img={"/16.png"}/>
                </div>
            </div>
            
        </div>
    )
}