import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ShopByPrice from "./ShopByPrice";
import ThirdPage from "./ThirdPage";

export default function Home(){
    return (
        <div className="w-full gap-5 flex flex-col px-10 justify-center items-center min-h-screen md:px-20  py-5">
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            <ShopByPrice/>
        </div>
    )
}