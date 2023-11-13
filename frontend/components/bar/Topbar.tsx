import { useRouter } from "next/router"

interface TopbarProps {
    children: any
}

const Topbar = () => {
    const router = useRouter()

    const onMailWriteClick = () => {
        router.push('/write')
    }

    return (
        <div className="border-b-[1px] ml-[0px] flex h-[60px] w-full bg-white border-green-100">
            <div className="flex items-center flex-start ml-[32px]">
                <span className="font-bold text-green-500">MAIL-GPT</span>
            </div>
            <div className="ml-auto flex items-center mr-[32px] space-x-[12px]">
                <div className="cursor-pointer" onClick={onMailWriteClick}>
                    <span className="font-bold text-green-500">메일 쓰기</span>
                </div>
                <div>
                    <span className="font-bold text-green-500">메일 보기</span>
                </div>
                <div>
                    <span className="font-bold text-green-500">키워드 보기</span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
