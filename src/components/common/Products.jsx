import { Link } from "react-router-dom";
import products from "/Users/ШагеД/pet-project/src/data/Products.json"

export default function Products() {
    return (
        <>
            <div className="flex items-start flex-col p-6">
                <p className="text-[36px] font-semibold">Товары в наличии
                    <Link to="" className="inline-flex items-center gap-2 ml-4">
                        <span className="text-[18px]">
                            Все товары в категории
                        </span>
                        <img className="w-[20px]" src="/right-arrow.png" alt="arrow" />
                    </Link>
                </p>
                <div className="flex flex-wrap relative gap-6 p-5 text-[18px]">
                    {products.map((objects, index) => (
                        <div key={index} className="flex gap-5 justify-center flex-col items-start p-6 bg-white border border-gray-200 shadow-sm rounded-[50px]">
                            <img className="" src={objects.img} alt={objects.name} />
                            {objects.sale && (
                                <p className="text-red-500 text-[16px] font-semibold">{objects.sale}%</p>
                            )}
                            <p className="text-[16px] font-semibold">{objects.name}</p>
                            <p className="text-[16px] font-semibold">{objects.door}</p>
                            <p className="text-[16px] font-semibold">{objects.size}</p>
                            {objects.preprice && objects.sale && (
                                <p className="text-sm text-gray-500 line-through">{objects.preprice}Br</p>
                            )}
                            <p className="text-2xl font-semibold">{objects.price}Br</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}