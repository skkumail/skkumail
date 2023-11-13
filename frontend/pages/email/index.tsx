import Topbar from "@/components/bar/Topbar"
import PortalContainer from "@/components/container/Container"
import SearchInput from "@/components/input/SearchInput"
import { useState } from "react"
import { mockEmails, EmailProps } from "./mockData"
import { useRouter } from "next/router"

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
                <span className="font-medium text-[10px] text-gray">{email}</span>
            </div>
        </div>
    )
}

const Email = () => {
    // To-do: Data From API
    const [searchValue, setSearchValue] = useState('')

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.target.value)
    }

    const placeholder = "수신인이나 키워드를 검색하세요."

    const router = useRouter()
    const handleButtonClick = (emailId: number) => {
        // Use router.push to navigate to the desired page
        router.push(`/email/email-detail/${emailId}`);
    };

    return (
        <PortalContainer topbar={<Topbar />}>
            <div className="m-[32px]">
                <SearchInput searchValue={searchValue} onChange={onChange} placeholder={placeholder} />
            </div>
            <div className="flex flex-col space-y-[20px]">
                {mockEmails.map((email: EmailProps, index: number) => (
                    <MailItem 
                        key={`${email.id}-${email.sender}`} id={email.id} sender={email.sender} title={email.title} email={email.email} onClick={handleButtonClick}                    
                    />
                ))}
            </div>
        </PortalContainer>
    )
}

export default Email
