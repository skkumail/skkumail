import React from "react"
import classNames from "classnames"
import { COLORS } from "@/modules/var"
import tw from 'twin.macro'

interface ButtonProps {
    onClick?: any
    className?: string
    disabled?: boolean
    children?: any
}

const Button = ({
    className,
    onClick,
    disabled = false,
    children,
}: ButtonProps) => {
    const buttonClasses = classNames(
        'flex items-center justify-center',
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
