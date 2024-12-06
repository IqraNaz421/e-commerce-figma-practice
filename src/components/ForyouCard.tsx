import { StaticImageData } from 'next/image'
import  Image from 'next/image';
import { FaStar } from "react-icons/fa";
import {IoCartOutline } from "react-icons/io5";
import { HiOutlineEye } from "react-icons/hi";

interface Products {
    image: string | StaticImageData;
    productAlt : string
    title : string 
    price : number
    cutPrice? : string
    offer? : string
    classes? : string
    reviewStars : number
    reviewCount : number
   
}
function ForyouCard({image , productAlt, title , price , cutPrice , reviewStars , reviewCount , offer , classes} : Products) {
  return (
    <div  className=' flex flex-col gap-3'> 
        <div  className='flex justify-center items-center w-[245px] h-[225px] bg-[#f5f5f5] relative overflow-y-hidden'>

        <p className={`${classes}`}>{offer}</p>
            <p className='absolute right-2 top-2 bg-white p-1 rounded-full cursor-pointer hover:bg-[#00ff66] hover:text-white'><HiOutlineEye /></p>

            <div className='flex gap-2 justify-center items-center absolute left-0 bottom-0 transition-all w-full bg-black text-white py-2 cursor-pointer'>

            
            <IoCartOutline className='text-2xl' />
            <p className='text-xs'>Add To Cart</p>
            </div>
            <Image className='-mt-8 w-[150px] h-auto' src={image} alt={productAlt}></Image>
        </div>
        <p>{title}</p>
        <p className='flex gap-3'>
            <span className='text-[#bd4444]'>${price}</span>
            <span className='text-[#707070] relative line-through'>{cutPrice}
            </span>
        </p>
        <p className='flex gap-3 items-center'>
            <span className='flex'>{Array(reviewStars).fill(<span className=' text-yellow-400'><FaStar /></span>)}</span>
            <span>({reviewCount})</span>
        </p>
        
    </div>
  )
} export default ForyouCard