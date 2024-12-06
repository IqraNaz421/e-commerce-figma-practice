import { StaticImageData } from 'next/image'
import  Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import {IoCartOutline  } from "react-icons/io5";

interface Products {
    image: string | StaticImageData;            
    productAlt : string
    title : string 
    price : number
    cutPrice : number
    reviewStars : number
    reviewCount : number
}
function ProductsCard({image , productAlt, title , price , cutPrice , reviewStars , reviewCount} : Products) {
  return (
    <div className=' flex flex-col gap-3'> 
        <div id='product'  className='flex justify-center items-center w-[270px] h-[250px] bg-[#f5f5f5] relative overflow-hidden'>
        <div id='cart' className='flex gap-2 justify-center items-center absolute left-0 bottom-0 translate-y-10 transition-all w-full bg-black text-white py-2 cursor-pointer'>
            <IoCartOutline className='text-2xl' /> 
             <p className='text-xs'>Add To Cart</p>
            </div>
            <Image src={image} alt={productAlt}></Image>
        </div>
        <p className='uppercase'>{title}</p>
        <p className='flex gap-3'>
            <span className='text-[#bd4444]'>${price}</span>
            <span className='text-[#707070] relative'>${cutPrice}
            <small className='w-[40px] h-[1px] bg-[#707070] absolute left-0 top-[12px]'></small>
            </span>
        </p>
        <p className='flex gap-3 items-center'>
            <span className='flex'>{Array(reviewStars).fill(<span className=' text-yellow-400'><FaStar /></span>)}</span>
            <span>({reviewCount})</span>
        </p>
    </div>
  )
} export default ProductsCard