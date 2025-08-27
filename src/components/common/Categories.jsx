import { Link } from "react-router-dom"
import categories from "/Users/ШагеД/pet-project/src/data/Categories.json"
export default function Categories() {
    return (
        <div className="flex items-start flex-col p-6">
            <p className="text-[36px] font-semibold">Популярные категории
                <Link to="">
                    <span className="text-[18px]">Все категории</span>
                </Link>
            </p>
            <div className="flex flex-wrap relative gap-6 p-5 text-[18px]">
                {categories.map((category, index) => (
                    <div key={index} className="flex gap-5 justify-center w-[250px] h-[200px] flex-col items-center p-6 bg-white border border-gray-200 shadow-sm rounded-[50px]">
                        <img className="w-[150px] h-[100px]" src={category.img} alt={category.name}/>
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}