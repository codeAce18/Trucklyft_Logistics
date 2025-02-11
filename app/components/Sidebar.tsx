"use client";

import React, {useState} from 'react';
import Image from 'next/image';

import DashboardLogo from "../../public/assets/DashboardLogo.svg"


import DashboardIconNormal from "../../public/assets/DashboardIconNormal.svg";
import DashboardIconPurple from "../../public/assets/DashboardIconPurple.svg";

import CarrierIconNormal  from  "../../public/assets/CarrierIconNormal.svg";
import CarrierIconPurple  from  "../../public/assets/CarrierIconPurple.svg";


import TendersIconNormal from "../../public/assets/TendersIconNormal.svg";
import TendersIconPurple from "../../public/assets/TendersIconPurple.svg";


import SettingsIconNormal from "../../public/assets/SettingsIconNormal.svg";
import SettingsIconPurple from "../../public/assets/SettingsIconPurple.svg";

import SupportIconNormal from "../../public/assets/SupportIconNormal.svg";
import SupportIconPurple from "../../public/assets/SupportIconPurple.svg";

import LogoutIconNormal from "../../public/assets/LogoutIconNormal.svg";
import LogoutIconPurple from "../../public/assets/LogoutIconPurple.svg";
import DashboardContent from './DashboardContent';
import CarriersContent from './CarriersContent';
import TendersContent from './TendersContent';
import SettingsContent from './SettingsContent';
import HelpCenterContent from './HelpCenterContent';
import LogOutContent from './LogOutCenter';


const Sidebar = () => {

    const [activeComponent, setActiveComponent] = useState("Dashboard");





    const isActive = (componentName: string) => activeComponent === componentName;


    // Reusable menu link component
    interface MenuLinkProps {
        name: string;
        normalIcon: string;
        purpleIcon: string;
        onClick: () => void;
        customClass?: string;
    }

    const MenuLink: React.FC<MenuLinkProps> = ({
        name,
        normalIcon,
        purpleIcon,
        onClick,
        customClass = "",
    }) => (
        <div
            onClick={() => {
                onClick();
            }}

            className={`pl-8 flex items-center gap-[10px] cursor-pointer h-[48px] duration-200 w-full group ${
                isActive(name)
                ? "bg-[#EFECF9] text-[#6841C7] border-r-[5px] border-r-[#6841C7]"
                : "text-[#9C9AA2] hover:bg-[#EFECF9] hover:text-[#6841C7] hover:border-r-[5px] hover:border-r-[#6841C7] hover:font-bold"
            } ${customClass}`}
        >
        <div className="relative w-8 h-8">
            <Image
            src={normalIcon}
            alt={`${name}normalIcon`}
            className={`absolute top-0 left-0 transition-opacity duration-200 ${
                isActive(name) ? "opacity-0" : "opacity-100 group-hover:opacity-0"
            }`}
            />
            <Image
            src={purpleIcon}
            alt={`${name}purpleIcon`}
            className={`absolute top-0 left-0 transition-opacity duration-200 ${
                isActive(name) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
            />
        </div>
        <h1 className={`text-[20px] leading-[24px]  ${
            isActive(name) ? "font-ThicccboiSemiBold" : "font-ThicccboiRegular"
            }`}>{name}</h1>
        </div>
    );



    return (
        <div className="flex">
            <div className='max-w-[220px] w-full border-r-[1px] h-screen border-r-[#E6E5E766]'>
                {/* Dashboard Logo */}
                <div className='pt-16 flex flex-col items-center justify-center mx-auto'>
                    <Image 
                        src={DashboardLogo} 
                        alt='Logo' 
                    />
                </div>

               


                <div className="mt-16 flex flex-col items-start justify-start gap-y-6">


                    <MenuLink
                        name="Dashboard"
                        normalIcon={DashboardIconNormal}
                        purpleIcon={DashboardIconPurple}
                        onClick={() => setActiveComponent("Dashboard")}
                    />


                    <MenuLink
                        name="Carriers"
                        normalIcon={CarrierIconNormal}
                        purpleIcon={CarrierIconPurple}
                        onClick={() => setActiveComponent("Carriers")}
                    />


                    <MenuLink
                        name="Tenders"
                        normalIcon={TendersIconNormal}
                        purpleIcon={TendersIconPurple}
                        onClick={() => setActiveComponent("Tenders")}
                    />  


                    <MenuLink
                        name="Settings"
                        normalIcon={SettingsIconNormal}
                        purpleIcon={SettingsIconPurple}
                        onClick={() => setActiveComponent("Settings")}
                    /> 



                    <MenuLink
                        name="Help Center"
                        normalIcon={SupportIconNormal}
                        purpleIcon={SupportIconPurple}
                        onClick={() => setActiveComponent("Help Center")}
                    /> 


                    <MenuLink
                        name="Logout"
                        normalIcon={LogoutIconNormal}
                        purpleIcon={LogoutIconPurple}
                        onClick={() => setActiveComponent("Logout")}
                    /> 
                </div>
            </div>



            <div className='min-h-screen w-full bg-[#FBFAFF]'>
                {activeComponent === "Dashboard" && <DashboardContent />}
                {activeComponent === "Carriers" && <CarriersContent />}
                {activeComponent === "Tenders" && <TendersContent  />}
                {activeComponent === "Settings" && <SettingsContent  />}
                {activeComponent === "Help Center" && <HelpCenterContent />}
                {activeComponent === "Logout" && <LogOutContent />}
            </div>
        </div>
    )
}

export default Sidebar;