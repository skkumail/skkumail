import React from "react"
import classNames from "classnames"
import { COLORS } from "@/modules/var"

export const enum BUTTON_SIZE {
    SM = 'sm',
    MD = 'md',
}

export const enum BUTTON_TYPE {
    SOLID = 'solid',
    OUTLINE = 'outline',
}

interface ButtonProps {
    type?: BUTTON_TYPE[keyof BUTTON_TYPE]
    size?: BUTTON_SIZE[keyof BUTTON_SIZE]
    customBgColor?: any
    customBorderColor?: any
    onClick?: any
    className?: string
    disabled?: boolean
    children?: any
}

const Button = ({
    type = BUTTON_TYPE.SOLID,
    size = BUTTON_SIZE.MD,
    customBgColor,
    customBorderColor,
    className,
    onClick,
    disabled = false,
    children,
}: ButtonProps) => {
    const buttonClasses = classNames(
        'flex w-full items-center justify-center',
        className,
    );

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button
