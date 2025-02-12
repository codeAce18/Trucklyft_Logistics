import Image from "next/image"

import NotificationSvg from "../../public/assets/NotificationSvg.svg"

import FilterIcon from "../../public/assets/FilterIcon.svg"

import ListIcon from "../../public/assets/ListIcon.svg"

import GridIcon from "../../public/assets/GridIcon.svg"


import { Input } from "@/components/ui/input"

import { SearchIcon } from 'lucide-react';



const CarriersContent = () => {
    return (
        <div>
           {/* Dashboard Header for Carriers*/}
           <div className="bg-[#FFFFFF] border-b-[1px] border-b-[#E6E5E766]  h-[64px] w-full">
                <div className='flex items-center justify-end gap-x-6 mr-10 mt-[32px]'>
                    <div className='cursor-pointer'>
                        <Image
                            src={NotificationSvg}
                            alt='NotificationIcon'
                        />
                    </div> 


                    <div className='flex items-center gap-2 cursor-pointer'>
                        <div  className='h-[32px] w-[32px] bg-[#6841C7] rounded-full flex flex-col items-center justify-center'>
                            <h1 className='font-ThicccboiSemiBold text-[12px] leading-[14px] text-white'>BM</h1>
                        </div>

                        <h1 className='whitespace-nowrap text-[#090318] font-ThicccboiSemiBold text-[12px] leading-[14px]'>Blueholdings Manufacturing</h1>
                    </div>
                </div>
            </div>


            <div className="pt-10 px-10">
                <h1  className="text-[#090318] text-[28px] leading-[34px] font-ThicccboiExtraBold tracking-[0%]">Carriers</h1>

                <p className="pt-[15px] text-[#090318] text-[18px] leading-[22px] font-ThicccboiRegular tracking-[0%]">Select a carrier to initiate a tender</p>
            </div>


            <div className="flex items-center justify-between px-10" >
                <div className="pt-10 flex item-center justify-start gap-8">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search for a carrier"
                            className="w-[263px] h-[48px] border-[1px] border-[#E6E5E7B2] text-[16px] leading-[20px] font-ThicccboiRegular rounded-[4px] pl-12 text-[#9C9AA2]"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <SearchIcon className="w-[16px] h-[16px] text-[#9C9AA2]" />
                        </div>
                    </div>
                    <div className="cursor-pointer flex items-center justify-center border-[1px] border-[#6841C7] w-[106px] h-[48px] gap-[8px] px-[16px] py-[12px] rounded-[4px]">
                        <Image src={FilterIcon} alt="FilterIcon" />
                        <h1 className="text-[#6841C7] text-[18px] leading-[22px] font-ThicccboiSemiBold tracking-[0%]">Filter</h1>
                    </div>
                </div>


                <div className="flex items-center gap-[16px]">
                    <button className="w-[56px] h-[48px] rounded-[4px] bg-[#6841C7] py-[12px] px-[16px]">
                        <Image src={ListIcon}  alt="ListIcon" />
                    </button>

                    <button className="border-[1px] border-[#CDCCD0] rounded-[4px] w-[56px] h-[48px] px-[16px] py-[12px]">
                        <Image src={GridIcon} alt="GridIcon" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default CarriersContent;