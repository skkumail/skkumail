import React from "react"

interface IContainerProps {
    topbar?: any
    layoutClassName?: string
    children?: any
}

const PortalContainer = ({ topbar, layoutClassName, children }: IContainerProps) => {
    return (
        <>
            <div className="flex w-full">
                {topbar && (
                    <div className="z-100 items-nter fixed flex w-full flex-col border-gray-200 bg-white lg:ml-[96px] lg:flex lg:w-[calc(100%_-_96px)]">
                        {topbar}
                    </div>
                )}
                <div className={layoutClassName ? layoutClassName : 'mx-auto mb-[120px] w-full max-w-[1040px] sm:mt-[60px] '}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PortalContainer 

