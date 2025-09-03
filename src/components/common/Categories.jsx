import { Link } from "react-router-dom"
import categories from "/Users/ШагеД/Desktop/pet/pet/pet-project/src/data/Categories.json"

export default function Categories() {
    return (
        <div className="flex items-start flex-col p-6">
            <p className="text-[36px] font-semibold">Популярные категории
                <Link to="">
                    <span className="text-[18px]">Все категории</span>
                </Link>
            </p>
            <div className="grid grid-cols-5 gap-6 p-5 text-[18px] w-full">
                {categories.map((category, index) => (
                    <div key={index} className="flex gap-5 justify-center flex-col items-center p-6 bg-white border border-gray-200 shadow-sm rounded-lg">
                        <img className="w-[150px] h-[100px]" src={category.img} alt={category.name}/>
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
