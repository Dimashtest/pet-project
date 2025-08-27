import { useState } from "react"
import { Link } from "react-router-dom"

export default function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
        <div className="flex items-center text-black justify-center p-6 gap-[60px]">
            <button onClick={toggleMenu} className="focus:outline-none cursor-pointer">
                <img src="/arrow.svg" alt="Открыть меню" />
            </button>
            <div className="relative w-[450px]">
                <input className="w-full border rounded-2xl pl-10 pr-4 py-2" type="text" placeholder="Что желаете найти?" />
                <img src="/search.svg" alt="search" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <p className="text-orange-500 text-[18px]">Вставить список покупок</p>
            <div className="flex items-center justify-center gap-5">
                <Link to="">
                    <img src="/favorite.svg" alt="favorite" />
                </Link>
                <Link to="">
                    <img src="/cart.svg" alt="cart" />
                </Link>
                <Link to="">
                    <img src="/user.svg" alt="user" />
                </Link>
            </div>
        </div>
        <div 
                className={`fixed top-0 left-0 h-full w-120 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
                    isMenuOpen ? '' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-9">
                    <img src="/logo.svg" alt="Clickhouse" />
                    <button onClick={toggleMenu} className="text-gray-500 cursor-pointer hover:text-gray-800 focus:outline-none">
                        <img src="/exit.svg" alt="exit8" />
                    </button>
                </div>
                <div className="p-9 flex flex-col text-[36px] gap-3 text-black font-medium">
                    <Link to="" onClick={toggleMenu}>Каталог</Link>
                    <Link to="" onClick={toggleMenu}>Товары в наличии</Link>
                    <Link to="" onClick={toggleMenu}>Скидки</Link>
                    <Link to="" onClick={toggleMenu}>Популярное</Link>
                    <Link to="" onClick={toggleMenu}>Вдохновение</Link>
                </div>
                <div className="p-9 flex flex-col text-gray-600 gap-3 text-[26px]">
                    <Link to="" onClick={toggleMenu}>Доставка</Link>
                    <Link to="" onClick={toggleMenu}>Условия</Link>
                    <Link to="" onClick={toggleMenu}>Контакты</Link>
                </div>
            </div>
            {isMenuOpen && (
                <div 
                    onClick={toggleMenu} 
                    className="fixed inset-0 bg-black opacity-30 z-40"
                />
            )}
        </>
    )
}