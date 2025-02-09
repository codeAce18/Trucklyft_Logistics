import React, { useState } from "react";

import Image from "next/image";

import "../app/globals.css";

import SignUpImage from "../public/assets/SignUpImage.jpeg";

import Overlay from "../public/assets/Overlay.png";

import TrucklyftLogo from "../public/assets/TrucklyftLogo.svg";

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"

import { useRouter } from "next/navigation";





const Login = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        // Handle login logic here
        console.log("Login with:", { email, password });
        // Navigate to home
        router.push("/");
    };


    return (
  
            <div className="flex items-start justify-between">
                <div className="pt-28">
                    <h1 className="lg:ml-60">Don&apos;t have an account? <span className="text-[#6841C7] font-bold text-[16px] leading-[20px]">Create one here</span></h1>
                    <div className="lg:ml-24 pt-16">
                        <h1 className="font-ThicccboiExtraBold text-[32px] leading-[38px] text-[#090318] font-extrabold">Welcome back</h1>
                        <p className="pt-[10px] text-[15px] leading-[20px] text-[#090318] font-ThicccboiRegular">Kindly sign in to your account</p>
                    </div>
                    <div className="lg:ml-24 pt-16">
                        <div className="w-full  space-y-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-[48px] text-[16px] w-[520px] outline-none border-[1px] border-[#DCDBEA]"
                                />
                            </div>
            
                            <div className="relative space-y-2">
                                <Label>Password</Label>
                                <div className="relative">
            
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-[48px] text-[16px] w-[520px] pr-20 outline-none border-[1px] border-[#DCDBEA]"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 bg-[#F8F7FF] w-[69px] hover:bg-transparent"
                                        onClick={togglePassword}
                                    >
                                        {showPassword ? (
                                        <h1 className="text-[#6B6774] text-[16px] leading-[20px]">
                                            Hide
                                        </h1>
                                        ) : (
                                        <h1 className="text-[#6B6774] text-[16px] leading-[20px]">
                                            Show
                                        </h1>
                                        )}
                                    </Button>
                                </div>
                            </div>
                            <div className="pt-20">
                                <Button
                                    className="text-[14px] leading-[16px] font-medium text-[#FFFFFF]  w-full bg-[#6841C7] h-[40.92px] max-w-[520px]"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end relative ">
                    <Image width={568} height={824} src={SignUpImage} alt="SignUpImg"  className="relative z-10" />
                    <div
                        className="absolute inset-0 z-20"
                        style={{
                            width: "568px",
                            height: "854px",
                        }}
                        >
                        <Image
                            src={Overlay}
                            alt="overlayImg"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="absolute z-50 top-10 left-10">
                        <Image src={TrucklyftLogo} alt="logo" />
                    </div>
                    <div className="absolute top-[534px] z-[60] left-10">
                        <h1 className="max-w-[569px] text-[32px] leading-[38px] font-extrabold text-[#FFFFFF]">Streamline Your Operations with Our Advanced Logistics Infrastructure</h1>
                        <p className="pt-10 text-[#FFFFFF] text-[16px] leading-[20px] font-normal max-w-[420px]">We provide a seamless and interconnected network that ensures the smooth flow of goods from point A to point B. We strategically have registered carriers very close to you to cater for your logistics needs.</p>
                    </div>
                </div>
            </div>
       
    )
}


export default Login;