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
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
                    <ProductCard img={"/5.png"}/>
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