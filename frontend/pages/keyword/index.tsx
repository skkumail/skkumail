import Topbar from "@/components/bar/Topbar";
import PortalContainer from "@/components/container/Container";
import { mockKeywords } from "@/data/mockData";
import { useState } from "react";

const Keyword = () => {

    return (
        <PortalContainer layoutClassName="m-20" topbar={<Topbar />}>
            <div className="text-black text-[20px] font-medium mb-[20px]">당신의 이메일에서 군집화한 키워드 목록 입니다.</div>
            <div className="flex flex-wrap space-x-[18px]">
                {mockKeywords.map((keywordItem, idx) => {
                    return (
                        <div key={idx} className="flex flex-col border-[1px] border-gray rounded-[10px] p-[16px]">
                            <div className="text-black font-bold text-[14px]">대표 키워드: {keywordItem.representKeyword}</div>
                        </div>
                    )
                })}
            </div>
        </PortalContainer>
    );
};

export default Keyword;
