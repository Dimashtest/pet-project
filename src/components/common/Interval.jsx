import { Link } from "react-router-dom"

export default function Interval() {
    return (
        <div className="flex gap-6 p-8 items-center justify-center">
            <div className="flex flex-col gap-8 p-10 w-[487px] h-[470px] border border-gray-200 inner-shadow rounded-[50px]">
                <div className="flex flex-col gap-4">
                    <p className="text-[48px] font-semibold leading-tight">Мебель на любой вкус!</p>
                    <ul className="list-disc marker:text-amber-500 text-[18px] pl-6">
                        <li>Худи, чашки для горячего чая и термосы</li>
                        <li>Елочные игрушки, брелочки</li>
                        <li>Начало списка вещей, которые можно</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                    <button className="bg-amber-500 w-full h-[50px] text-white text-[18px] font-medium rounded-full">
                        Перейти в каталог
                    </button>
                    <button className="w-full h-[50px] text-amber-500 text-[18px] font-medium border border-gray-200 rounded-full bg-white shadow-sm">
                        Внести список артикулов
                    </button>
                </div>
            </div>
            <img src="/screen.svg" alt="screen" />
        </div>
    )
}