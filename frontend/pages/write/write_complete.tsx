import Topbar from "@/components/bar/Topbar"
import Button from "@/components/button/Button"
import PortalContainer from "@/components/container/Container"
import { useRouter } from "next/router"

const WriteComplete = () => {
    const router = useRouter()

    return (
        <PortalContainer topbar={<Topbar />}>
            <div className="flex flex-col justify-center items-center mt-[300px] space-y-[30px]">
                <div className="text-black text-[20px] font-bold">메일 작성을 완료하셨습니다!</div>
                <div className="flex space-x-[10px]">
                    <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-white'
                        onClick={() => router.push('/write')}>
                        <span className='font-bold text-green-500'>메일 새로 작성하기</span>
                    </Button>
                    <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
                        onClick={() => router.push('/email')}>
                        <span className='font-bold text-white'>메일 목록 보기</span>
                    </Button>
                </div>
            </div>
        </PortalContainer>
    )
}

export default WriteComplete
