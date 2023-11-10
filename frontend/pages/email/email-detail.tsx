import Topbar from "@/components/bar/Topbar"
import Button from "@/components/button/Button"
import PortalContainer from "@/components/container/Container"
import classNames from "classnames"

interface EmailDetailProps {
    title: string | null
    sender: string | null
    receiver: string | null
    date: string | null
    content: string | null
}

const EmailDetail = () => {
    const title = "Title: OOO Report"
    const receiver = "abcdecompany@gmail.com"
    const sender = "james@gmail.com"
    const date = "2023년 00월 00일 00:00"
    const content = `
    Subject: Monthly Sales Report

    Dear [Recipient's Name],
    
    I trust this email finds you well. As part of our ongoing commitment to transparency and effective communication, please find attached the Monthly Sales Report for the month of October.
    
    ### Summary:
    
    1. **Sales Performance Overview:**
       - Total Sales: $150,000
       - Top-performing Product: XYZ Widget
       - Region with Highest Sales: Northeast
    
    2. **New Business Development:**
       - Acquired 10 new clients
       - Successfully launched marketing campaign X, resulting in a 15% increase in leads
    
    3. **Upcoming Initiatives:**
       - Launching the Winter Collection on [Date]
       - Hosting a webinar on [Topic] to engage with our customer base
    
    ### Challenges and Opportunities:
    
    - **Challenges:**
      - Market volatility impacting sales projections
      - Addressing customer feedback on [Specific Issue]
    
    - **Opportunities:**
      - Exploring new partnerships for market expansion
      - Implementing customer loyalty program to enhance retention
    
    ### Looking Ahead:
    
    We remain dedicated to adapting and thriving in today's dynamic business environment. Your insights and feedback are invaluable to us, and we welcome any thoughts or suggestions you may have.
    
    Thank you for your continued support.
    
    Best regards,
    `

    const htmlContent = `${content.replace(/\n/g, '<br />')}`;

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
                <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500' onClick={() => console.log('keyword')
                }>
                    <span className='font-bold text-white'>키워드 보기</span>
                </Button>
            </div>
        </div>
        </PortalContainer>
    )
}

export default EmailDetail
