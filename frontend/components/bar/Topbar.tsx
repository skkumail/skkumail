interface TopbarProps {
    children: any
}

const Topbar = () => {
    return (
        <div className="border-b-[1px] ml-[0px] flex h-[60px] w-full bg-white border-green-100">
            <div className="flex items-center flex-start ml-[32px]">
                <span className="font-bold text-green-500">MAIL-GPT</span>
            </div>
            <div className="ml-auto flex items-center mr-[32px] space-x-[8px]">
                <span className="font-bold text-green-500">icon</span>
                <span className="font-bold text-green-500">icon</span>
                <span className="font-bold text-green-500">icon</span>
            </div>
        </div>
    )
}

export default Topbar
