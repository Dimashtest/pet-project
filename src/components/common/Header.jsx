import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="w-full flex justify-center bg-[#F8F8F8] font-roboto">
            {/*
              Этот div - общий контейнер, который выравнивает
              содержимое хедера
            */}
            <div className="flex items-center text-black justify-between p-4 w-full max-w-7xl">
                <img src="/logo.svg" alt="logo" />
                <div className='flex items-start gap-3'>
                    <Link to="" className='flex items-center justify-center p-4'>
                        Каталог
                    </Link>
                    <Link to="" className='flex items-center justify-center gap-3 p-4 '>
                        Доставка
                    </Link>
                    <Link to="" className='flex items-center justify-center gap-3 p-4 '>
                        Условия
                    </Link>
                    <Link to="" className='flex items-center justify-center gap-3 p-4 '>
                        Контакты
                    </Link>
                </div>
                <div className="flex flex-col text-right">
                    <p>+ 375 736 463 64 72 <span className="text-[#949494]"> / </span> + 375 736 463 64 72</p>
                    <p className="text-[#949494]">Заказать звонок</p>
                </div>
            </div>
        </div>
    )
}