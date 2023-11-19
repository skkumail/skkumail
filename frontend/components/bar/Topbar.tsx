import { useUser } from "@/modules/userContext"
import { useRouter } from "next/router"

interface TopbarProps {
    isLogin?: boolean
}

const Topbar = ({ isLogin = false }: TopbarProps) => {
    const { logout, user } = useUser()

    const router = useRouter()

    const onMailWriteClick = () => {
        router.push('/write')
    }

    const onMailReadClick = () => {
        router.push('/email')
    }

    const onKeywordClick = () => {
        router.push('/keyword')
    }

    const onClickLogout = () => {
        logout()
        router.push('/')
    }

    return (
        <div className="border-b-[1px] ml-[0px] flex h-[60px] w-full bg-white border-green-100">
            <div className="flex items-center flex-start ml-[32px]">
                <span className="font-bold text-green-500">MAIL-GPT</span>
            </div>
            {
                !isLogin && (
                    <div className="ml-auto flex items-center mr-[32px] space-x-[12px]">
                        <div>
                            <span className="font-bold text-green-500">{user && user.username} 님</span>
                        </div>
                        <div className="cursor-pointer" onClick={onMailWriteClick}>
                            <span className="font-bold text-green-500">메일 쓰기</span>
                        </div>
                        <div className="cursor-pointer" onClick={onMailReadClick}>
                            <span className="font-bold text-green-500">메일 보기</span>
                        </div>
                        <div className="cursor-pointer" onClick={onKeywordClick}>
                            <span className="font-bold text-green-500">키워드 보기</span>
                        </div>
                        <div className="cursor-pointer" onClick={onClickLogout}>
                            <span className="font-bold text-green-500">로그아웃</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Topbar
