import Topbar from "@/components/bar/Topbar";
import PortalContainer from "@/components/container/Container";
import { mockKeywords } from "@/data/mockData";
import { useUser } from "@/modules/userContext";
import axios from "axios";
import { useEffect, useState } from "react";

const Keyword = () => {
    const { user } = useUser()
    const api = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`  // 백엔드 서버의 주소와 포트를 baseURL로 설정
    });
    const [keywords, setKeywords] = useState([])

    const keyword = async () => {
        try {
            const response = await api.post('/main_keyword', {
                username: user?.username
            });

            console.log(response);
            setKeywords(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            alert('실패!');
        }
    };

    useEffect(() => {
        keyword()
    }, [user])

    return (
        <PortalContainer layoutClassName="m-20" topbar={<Topbar />}>
            <div className="text-black text-[20px] font-medium mb-[20px]">당신의 이메일에서 군집화한 키워드 목록 입니다.</div>

            <div className="flex flex-wrap space-x-[18px]">
                {keywords.length >= 1 && keywords.map((keywordItem, idx) => {
                    return (
                        <div key={idx} className="flex flex-col border-[1px] border-gray rounded-[10px] p-[16px]">
                            <div className="text-black font-bold text-[14px]">대표 키워드: {keywordItem}</div>
                        </div>
                    )
                })}
            </div>
        </PortalContainer>
    );
};

export default Keyword;
