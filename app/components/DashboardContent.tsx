import Image from 'next/image'


import NotificationSvg from '../../public/assets/NotificationSvg.svg';

import TotalTendersIcon from "../../public/assets/TotalTendersIcon.svg"

import PendingTendersIcon from "../../public/assets/PendingTendersIcon.svg"

import DeliveredTendersIcon from "../../public/assets/DeliveredTendersIcon.svg"

import CancelledTendersIcon from "../../public/assets/CancelledTendersIcon.svg"




const DashboardContent = () => {
    return (
        <div>
            {/* Dashboard Header */}
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


            <div className='px-10 pt-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#090318] text-[28px] leading-[34px] font-ThicccboiExtraBold'>Dashboard</h1>

                    <div>
                        <button className='whitespace-nowrap text-[16px] leading-[20px] font-ThicccboiSemiBold text-white bg-[#6841C7] w-[184px] h-[48px] rounded-[4px]'>
                            Initiate new tender
                        </button>
                    </div>
                </div>


                <div className='pt-16'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-16 rounded-[8px] justify-center w-[265px] bg-[#FFFFFF] border-[1px] border-[#E6E5E766] h-[135px]'>
                            <div>
                                <p className='text-[#6B6774] text-[14px] leading-[17px] font-ThicccboiSemiBold'>Total Tenders</p>
                                <h1 className='pt-6 text-[#090318] text-[32px] leading-[38px] font-ThicccboiExtraBold'>102</h1>
                            </div>
                            <Image src={TotalTendersIcon} alt='TotalTendersIcon' />
                        </div>
                        <div className='flex items-center gap-16 rounded-[8px] justify-center w-[265px] bg-[#FFFFFF] border-[1px] border-[#E6E5E766] h-[135px]'>
                            <div>
                                <p className='text-[#6B6774] text-[14px] leading-[17px] font-ThicccboiSemiBold'>Pending Tenders</p>
                                <h1 className='pt-6 text-[#090318] text-[32px] leading-[38px] font-ThicccboiExtraBold'>3</h1>
                            </div>
                            <Image src={PendingTendersIcon} alt='PendingTendersIcon' />
                        </div>
                        <div className='flex items-center gap-16 rounded-[8px] justify-center w-[265px] bg-[#FFFFFF] border-[1px] border-[#E6E5E766] h-[135px]'>
                            <div>
                                <p className='text-[#6B6774] text-[14px] leading-[17px] font-ThicccboiSemiBold'>Delivered Tenders</p>
                                <h1 className='pt-6 text-[#090318] text-[32px] leading-[38px] font-ThicccboiExtraBold'>98</h1>
                            </div>
                            <Image src={DeliveredTendersIcon} alt='DeliveredTendersIcon' />
                        </div>
                        <div className='flex items-center gap-16 rounded-[8px] justify-center w-[265px] bg-[#FFFFFF] border-[1px] border-[#E6E5E766] h-[135px]'>
                            <div>
                                <p className='text-[#6B6774] text-[14px] leading-[17px] font-ThicccboiSemiBold'>Cancelled Tenders</p>
                                <h1 className='pt-6 text-[#090318] text-[32px] leading-[38px] font-ThicccboiExtraBold'>1</h1>
                            </div>
                            <Image src={CancelledTendersIcon} alt='CancelledTendersIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardContent;