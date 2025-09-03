import React from "react";
import { Link } from "react-router-dom";

export default function Interval() {
    return (
        <>
            <style>
                {`
                .slider {
                    width: 580px;
                    height: 500px;
                    overflow: hidden;
                    border-radius: 50px;
                }
                .slides {
                    width: 300%;
                    height: 100%;
                    display: flex;
                    animation: slide-animation 7s infinite ease-in-out;
                }
                .slide-item {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                @keyframes slide-animation {
                    0% { transform: translateX(0); }
                    33.33% { transform: translateX(-33.33%); }
                    66.66% { transform: translateX(-66.66%); }
                    100% { transform: translateX(0); }
                }
                `}
            </style>
            <div className="flex gap-6 p-8 items-center justify-center">
                <div className="flex flex-col gap-8 p-10 w-[487px] h-[500px] border border-gray-200 inner-shadow rounded-[50px]">
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

                <div className="slider">
                    <div className="slides">
                        <img className="slide-item" src="/screen.svg" alt="Home Decor 1" />
                        <img className="slide-item" src="/screen1.svg" alt="Home Decor 2" />
                        <img className="slide-item" src="/screen2.svg" alt="Home Decor 3" />
                    </div>
                </div>
            </div>
        </>
    );
}