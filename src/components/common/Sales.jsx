import { Link } from "react-router-dom"
import sales from "/Users/ШагеД/pet-project/src/data/Sales.json"

export default function Sales() {
    return (
        <>
            <div className="p-6">
                <div className="flex items-start flex-col p-6">
                    <p className="flex items-center text-[36px] font-semibold">Скидки <span className="text-red-500">%</span>
                        <Link to="" className="inline-flex items-center gap-2 mt-2 ml-3 text-[18px]">
                            Все товары в категории
                            <img className="w-[20px] mt-1" src="/right-arrow.png" alt="arrow" />
                        </Link>
                    </p>
                </div>

                <div className="flex flex-wrap relative gap-6 p-5 text-[18px]">
                    {sales.map((sales, index) => (
                        <div key={index} className="flex gap-5 justify-center flex-col items-start p-6 bg-white border border-gray-200 shadow-sm rounded-[50px]">
                            <img className="" src={sales.img} alt={sales.name} />
                            {sales.sale && (
                                <p className="text-red-500 text-[16px] font-semibold">{sales.sale}%</p>
                            )}
                            <p className="text-[16px] font-semibold">{sales.name}</p>
                            <p className="text-[16px] font-semibold">{sales.door}</p>
                            <p className="text-[16px] font-semibold">{sales.size}</p>
                            {sales.preprice && sales.sale && (
                                <p className="text-sm text-gray-500 line-through">{sales.preprice}Br</p>
                            )}
                            <p className="text-2xl font-semibold">{sales.price}Br</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}