import { useState } from "react"
import { Link } from "react-router-dom"

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [isRegisterOpen, setRegisterOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleRegister = () => {
        setRegisterOpen(!isRegisterOpen)
    }

    return (
        <>
            <div className="flex items-center text-black justify-between p-6 px-[10%] w-full">
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
                    <button onClick={toggleRegister} className="cursor-pointer">
                        <img src="/user.svg" alt="user" />
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-120 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMenuOpen ? '' : '-translate-x-full'
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

            <div
                className={`fixed top-0 right-0 h-full w-120 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isRegisterOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end p-8">
                    <button onClick={toggleRegister} className="text-gray-500 cursor-pointer hover:text-gray-800 focus:outline-none">
                        <img src="/exit.svg" alt="exit8" />
                    </button>
                </div>
                <div className="p-9 flex flex-col gap-3">
                    <p className="text-[36px] font-bold">Регистрация</p>
                    <input className="border rounded-full border-gray-500 opacity-65 pl-5 h-[50px]" type="text" placeholder="Телефон" />
                    <input className="border rounded-full border-gray-500 opacity-65 pl-5 h-[50px]" type="text" placeholder="Email" />
                    <input className="border rounded-full border-gray-500 opacity-65 pl-5 h-[50px]" type="text" placeholder="Пароль" />
                    <input className="border rounded-full border-gray-500 opacity-65 pl-5 h-[50px]" type="text" placeholder="Повторите пароль" />

                </div>
                <div className="p-9 flex flex-wrap items-center justify-between gap-2">
                    <input type="checkbox" />
                    <span className="text-xl">Я даю согласие на обработку персональных данных</span>
                </div>
            </div>
            {isRegisterOpen && (
                <div
                    onClick={toggleRegister}
                    className="fixed inset-0 bg-black opacity-30 z-40"
                />
            )}
        </>
    )
}
