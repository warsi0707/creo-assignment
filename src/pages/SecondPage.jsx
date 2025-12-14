import ProductCard from "../components/ProductCard";

export default function SecondPage(){
    return (
        <div className="w-full  ">
           <div className="w-full  ">
                <div className="p-5 flex justify-center text-5xl bg-gray-primary rounded-2xl  text-white">
                    <h1>Latest Arrivals</h1>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-between py-5">
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/6.png"}/>
                    <ProductCard img={"/7.png"}/>
                    <ProductCard img={"/8.png"}/>
                    <ProductCard img={"/9.png"}/>
                    <ProductCard img={"/10.png"}/>
                    <ProductCard img={"/11.png"}/>
                    <ProductCard img={"/12.png"}/>
                    <ProductCard img={"/13.png"}/>
                    <ProductCard img={"/14.png"}/>
                    <ProductCard img={"/15.png"}/>
                    <ProductCard img={"/16.png"}/>
                    <ProductCard img={"/17.png"}/>
                    <ProductCard img={"/18.png"}/>
                    <ProductCard img={"/19.png"}/>
                </div>
                <div className="flex justify-center">
                    <button className="bg-gray-primary p-5 text-white cursor-pointer rounded-2xl flex items-center gap-1">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>See more</p>
                    </button>
                </div>
            </div>
           
        </div>
    )
}