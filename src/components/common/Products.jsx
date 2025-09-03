import { Link } from "react-router-dom";
import products from "/Users/ШагеД/Desktop/pet/pet/pet-project/src/data/Products.json"

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
                <div className="grid grid-cols-4 gap-6 p-5 text-[18px]">
                    {products.map((objects, index) => (
                        <div key={index} className="flex flex-col items-start justify-between p-6 bg-white border border-gray-200 shadow-sm rounded-lg">
                            <img className="object-contain w-full h-48 mb-4" src={objects.img} alt={objects.name} />
                            {objects.sale && (
                                <p className="text-red-500 text-[16px] font-semibold">{objects.sale}%</p>
                            )}
                            <div className="flex flex-col h-32 justify-end items-start w-full">
                                <p className="text-[16px] font-semibold">{objects.name}</p>
                                <p className="text-[16px] font-semibold">{objects.door}</p>
                                <p className="text-[16px] font-semibold">{objects.size}</p>
                            </div>
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

///Users/ШагеД/pet-project/src/data/Products.json