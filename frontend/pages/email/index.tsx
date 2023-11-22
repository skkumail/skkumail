import Topbar from "@/components/bar/Topbar"
import PortalContainer from "@/components/container/Container"
import SearchInput from "@/components/input/SearchInput"
import { useEffect, useState } from "react"
import { mockEmails, EmailProps } from "../../data/mockData"
import { useRouter } from "next/router"
import axios from "axios"
import { useUser } from "@/modules/userContext"

interface MailItemProps {
    id: number
    sender: string
    title: string
    email: string
    onClick: (emailId: number) => void
}

const MailItem = ({ id, sender, title, email, onClick }: MailItemProps) => {
    return (
        <div className="flex rounded-[4px] border-[1px] border-gray bg-white w-full p-[16px] cursor-pointer" onClick={() => {
            onClick(id)
        }}>
            <div className="flex flex-col flex-1">
                <span className="font-medium text-[8px] text-blue">수신인</span>
                <div className="flex flex-row items-center justify-start">
                    <span className="text-[20px] font-bold text-black">{sender}</span>
                    <div className="mx-[8px] h-[16px] w-[1px] bg-gray"></div>
                    <span className="text-[20px] font-bold text-black">{title}</span>
                </div>
                {/* <span className="font-medium text-[10px] text-gray">{email}</span> */}
            </div>
        </div>
    )
}

const Email = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const { user } = useUser()

    const api = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`  // 백엔드 서버의 주소와 포트를 baseURL로 설정
    });

    const fetchData = async () => {
          try {
            const response = await api.post('/showmail', {
              username : user?.username
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

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.target.value)
    }

    const placeholder = "수신인이나 키워드를 검색하세요."

    const router = useRouter()
    const handleButtonClick = (emailId: number) => {
        // Use router.push to navigate to the desired page
        router.push(`/email/email-detail/${emailId}`);
    };

    console.log(data);
    

    return (
        <PortalContainer topbar={<Topbar />}>
            <div className="m-[32px]">
                <SearchInput searchValue={searchValue} onChange={onChange} placeholder={placeholder} />
            </div>
            <div className="flex flex-col space-y-[20px]">
                {data && data.map((email: Array<any>, index: number) => (
                    <MailItem
                        key={index} id={index} sender={email[2]} title={email[1]} email={email[3]} onClick={handleButtonClick}
                    />
                ))}
            </div>
        </PortalContainer>
    )
}

export default Email
