import Topbar from "@/components/bar/Topbar"
import Button from "@/components/button/Button"
import PortalContainer from "@/components/container/Container"
import classNames from "classnames"
import { mockEmails, EmailProps } from "../../../data/mockData"
import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"
import Popup from "@/components/popup/Popup"
// 추가된 부분 2023-11-14, 로컬에서 개발하기 전에 
// export BACKEND_HOST=127.0.0.1, 
// export BACKEND_PORT=8000 하고 쓰세요
import { baseURL } from "@/pages/api/axiosConfig"

interface KeywordItemProps {
    keyword: string
}

const KeywordItem = ({ keyword }: KeywordItemProps) => {
    return (
        <div className="flex rounded-[4px] border-[1px] border-gray w-full p-[16px] items-center justify-center">
            <span className="font-bold text-[15px] text-black">{keyword}</span>
        </div>
    )
}

const EmailDetail = () => {
    // emailId 를 param 으로 받도록
    const router = useRouter()
    const emailId = router.query?.emailId
        ? typeof router.query.emailId === 'string'
            ? parseInt(router.query.emailId, 10)
            : 0
        : 1

    // To-do: API 로 받아야 함
    const myEmail = mockEmails.filter((item) => item.id === emailId)[0]
    const title = myEmail.title
    const receiver = myEmail.receiver
    const sender = myEmail.sender
    const date = myEmail.date
    const content = myEmail.content
    const htmlContent = `${content.replace(/\n/g, '<br />')}`;

    // 키워드 추출 관련
    const [keywords, setKeywords] = useState([])
    //const serverUrl = "http://127.0.0.1:8000" // env 빼기
    const serverUrl = baseURL;

    const handleKeywordExtractBtn = async (content: string) => {
        const payload = {
            email_text: content
        }
        const response = await axios.post(`${serverUrl}/extract_keywords`, payload) // env 분리 필요

        if (response.status == 200) {
            setKeywords(response.data.keywords)
        }
    }

    useEffect(() => {
        handleKeywordExtractBtn(content)
    }, [content])

    // popup 관련
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <PortalContainer topbar={<Topbar />}>
            <div className="flex flex-col space-y-[40px]">
                <div className="flex flex-col p-[32px] border-[1px] m-[32px] rounded-[5px] border-green-500">
                    <div className="font-bold text-[32px] text-black">{title}</div>
                    <div className="mt-[20px] flex flex-col">
                        <div>
                            <span className="font-medium text-[16px] text-gray">수신인: {receiver}</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="font-medium text-[16px] text-gray">송신인: {sender}</span>
                            <span className="font-medium text-[16px] text-gray">날짜: {date}</span>
                        </div>
                    </div>
                    <div
                        style={{ height: 1 }}
                        className='bg-gray mt-[20px]'
                    ></div>
                    <div className="flex m-[20px]">
                        <div className="font-medium text-[16px] text-black" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>
                </div>
                <div className="flex px-[32px] justify-end">
                    <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
                        onClick={() => {
                            openPopup()
                        }}>
                        <span className='font-bold text-white'>키워드 보기</span>
                    </Button>
                </div>
            </div>
            {isPopupOpen &&
                <Popup title={"해당 이메일의 키워드 목록입니다."} onClose={closePopup}>
                    <div className="flex flex-col space-y-[10px] w-full">
                        {keywords.map((keyI, idx) => (
                            <KeywordItem key={`${idx}-${keyI[0]}`} keyword={keyI[0]} />
                        ))}
                    </div>
                </Popup>
            }
        </PortalContainer>
    )
}

export default EmailDetail
