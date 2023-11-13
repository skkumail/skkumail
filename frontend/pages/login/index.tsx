import Button, { BUTTON_SIZE, BUTTON_TYPE } from "@/components/button/Button"
import PortalContainer from "@/components/container/Container"

const LoginPage = () => {
    return (
        <PortalContainer>
            <Button size={BUTTON_SIZE.MD} type={BUTTON_TYPE.SOLID} onClick={() => console.log('button test')}>
                <span className="text-[14px] font-bold text-white">로그인 하세요</span>
            </Button>
        </PortalContainer>
    )
}

export default LoginPage
