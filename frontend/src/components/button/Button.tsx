import React from "react"
import classNames from "classnames"
import tw from 'twin.macro'
import { COLORS } from "@/src/modules/var"

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
        styles.size({ size }),
        styles.border({ type, size }),
        styles.backgroundColor({ bgColor: customBgColor || COLORS.GREEN, type }),
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

const styles = {
    disabled: ({ disabled }: { disabled: boolean }) => [disabled && tw`bg-gray-200`],
    size: ({
        size,
    }: {
        size: BUTTON_SIZE[keyof BUTTON_SIZE]
    }) => [
            size === BUTTON_SIZE.SM && tw`rounded-[5px] py-[8px] px-[16px]`,


            size === BUTTON_SIZE.MD && tw`rounded-[7px] py-[12px] px-[28px]`,

        ],
    border: ({ type, size }: { type: BUTTON_TYPE[keyof BUTTON_TYPE]; size: BUTTON_SIZE[keyof BUTTON_SIZE] }) => [
        type === BUTTON_TYPE.OUTLINE && tw`border-[1px]`
    ],
    backgroundColor: ({
        bgColor,
        type,
    }: {
        bgColor: (typeof COLORS)[keyof typeof COLORS]
        type: BUTTON_TYPE[keyof BUTTON_TYPE]
    }) => [bgColor || type === BUTTON_TYPE.SOLID ? COLORS.GREEN : COLORS.WHITE],
}


export default Button
