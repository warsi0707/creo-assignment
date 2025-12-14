import LeftCarousel from "../components/LeftCarousel";
import ProductCard from "../components/ProductCard";
 
export default function FirstPage(){
    return (
        <div className="w-full  min-h-screen md:grid grid-cols-10 ">
            <div className="hidden md:flex bg-gray-primary w-full rounded-t-3xl rounded-bl-3xl col-span-3  h-full  ">
                <div className=" bg-gray-primary w-full rounded-t-3xl rounded-bl-3xl  xl col-span-3 p-5 h-full  flex-col ">
                    <LeftCarousel className={'h-[500px] '} img1={"/img1.png"} img2={"/img2.png"} img3={"/img3.png"}/>
                <div className="text-white space-y-2">
                    <p>Discover amazing deals in this clearance sale by </p>
                    <h1 className="text-2xl">Little Things Cute</h1>
                </div>
                </div>
            </div>
            <div className=" w-full h-full col-span-7 rounded-3xl rounded-bl-2xl ">
                <div className="w-full h-fullrounded-3xl space-y-10">
                   <LeftCarousel className={"rounded-3xl h-[400px]"} img1={"/5.png"} img2={"/6.png"} img3={"/7.png"}/>
                   <div className="flex justify-between gap-2 rounded-bl-2xl">
                    <ProductCard img={"/8.png"}/>
                    <ProductCard img={"/9.png"}/>
                    <ProductCard img={"/10.png"}/>
                    <ProductCard img={"/11.png"}/>
                   </div>
                </div>
            </div>
        </div>
    )
}