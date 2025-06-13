import { Routes } from "@/constants/enums";
import Link from "../link";
import Navbar from "./Navbar";
import CartButton from "./cart-button";

 function Header(){
    return(
        <header  className="py-4 md:py-6">
            <div className="container flex items-center justify-between gap-6 lg:gap-10">
                <Link href={Routes.ROOT}> 🍕 Logo</Link>
                <Navbar/>
                <CartButton/>
            </div>
        </header>
    )
}
export default Header
