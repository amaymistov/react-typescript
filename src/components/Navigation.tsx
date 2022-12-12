import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
            <span className="font-bold">qwerty</span>

            <span>
                <Link to="/" className="mr-2">Товары</Link>
                <Link to="/about">О нас</Link>
            </span>
        </nav>
    )
}