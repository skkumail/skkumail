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
import { useUser } from "@/modules/userContext"

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
    const { user } = useUser()
    const emailId = router.query?.emailId
        ? typeof router.query.emailId === 'string'
            ? parseInt(router.query.emailId, 10)
            : 0
        : 1

    // To-do: API 로 받아야 함
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const api = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`  // 백엔드 서버의 주소와 포트를 baseURL로 설정
    });

    const fetchData = async () => {
        try {
            const response = await api.post('/showmail', {
                username: user?.username
            });

            console.log(response);

            setData(response.data.data)
        } catch (error) {
            alert('실패!');
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const [myEmail, setMyEmail] = useState<string[]>([])

    useEffect(() => {
        if (data) {
            const foundItem = data.find((_item, idx) => idx === emailId);
            setMyEmail(foundItem ?? []);
        }
    }, [data])

    // 키워드 추출 관련
    const [keywords, setKeywords] = useState([])

    // const handleKeywordExtractBtn = async (content: string) => {
    //     const payload = {
    //         email_text: content
    //     }
    //     const response = await axios.post(`/extract_keywords`, payload)

    //     if (response.status == 200) {
    //         setKeywords(response.data.keywords)
    //     }
    // }

    // useEffect(() => {
    //     handleKeywordExtractBtn(content)
    // }, [content])

    // popup 관련 (키워드 추출)
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    // popup 관련 (요약 추출)
    const [isSumPopupOpen, setSumPopupOpen] = useState(false);

    const openSumPopup = () => {
        setSumPopupOpen(true);
    };

    const closeSumPopup = () => {
        setSumPopupOpen(false);
    };

    const content = myEmail && myEmail[3] ? myEmail[3] : '';
    const htmlContent = `${content ? content.replace(/\n/g, '<br />') : ''}`;


    return (
        <PortalContainer topbar={<Topbar />}>
            <>
                {
                    myEmail.length > 1 && (
                        <div className="flex flex-col space-y-[40px]">
                            <div className="flex flex-col p-[32px] border-[1px] m-[32px] rounded-[5px] border-green-500">
                                <div className="font-bold text-[32px] text-black">{myEmail[1]}</div>
                                <div className="mt-[20px] flex flex-col">
                                    <div>
                                        <span className="font-medium text-[16px] text-gray">수신인: {"slim"}</span>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <span className="font-medium text-[16px] text-gray">송신인: {myEmail[2]}</span>
                                        <span className="font-medium text-[16px] text-gray">날짜: {myEmail[0]}</span>
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
                            <div className="flex px-[32px] justify-end space-x-[10px]">
                                <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
                                    onClick={() => {
                                        openPopup()
                                    }}>
                                    <span className='font-bold text-white'>키워드 보기</span>
                                </Button>
                                <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
                                    onClick={() => {
                                        openPopup()
                                    }}>
                                    <span className='font-bold text-white'>요약 보기</span>
                                </Button>
                            </div>
                        </div>
                    )
                }
                {isPopupOpen &&
                    <Popup title={"해당 이메일의 키워드 목록입니다."} onClose={closePopup}>
                        <div className="flex flex-col space-y-[10px] w-full">
                            {keywords.map((keyI, idx) => (
                                <KeywordItem key={`${idx}-${keyI[0]}`} keyword={keyI[0]} />
                            ))}
                        </div>
                    </Popup>
                }
                {isSumPopupOpen &&
                    <Popup title={"해당 이메일의 요약입니다."} onClose={closeSumPopup}>
                        <div className="flex flex-col space-y-[10px] w-full">
                            {keywords.map((keyI, idx) => (
                                <KeywordItem key={`${idx}-${keyI[0]}`} keyword={keyI[0]} />
                            ))}
                        </div>
                    </Popup>
                }
            </>
        </PortalContainer>
    )
}

export default EmailDetail
