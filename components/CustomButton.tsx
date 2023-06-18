"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: CustomButtonProps) {
    return (  
            <button
                disabled={isDisabled}
                type={btnType || "button"}
                className={`custom-btn ${containerStyles}`}
                onClick={handleClick}
            >
                <span className={`flex-1 ${textStyles}`}>
                    {title}
                </span>
                {rightIcon && (
                    <div className="absolute h-20 w-20">
                        <Image src={rightIcon} alt="right icon" fill className="object-contain hover:sepia-[1%] hover:invert-[83%] hover:saturate-[2%] hover:hue-rotate-[118deg] hover:brightness-105 hover:contrast-[101%] duration-300"/>
                    </div>
                )}
            </button>
    );
}

export default CustomButton;