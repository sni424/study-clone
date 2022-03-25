import { useState } from "react";
import { S } from "./style";
import left from "../../asset/image/bt-left.png";
import right from "../../asset/image/bt-right.png";
import companyLogo from "../../asset/image/company-logo_1.png";
import samsung from "../../asset/image/samsung.png";
import cjLogo from "../../asset/image/cj-logo.png";
import kbLogo from "../../asset/image/kbkookmin.png";

const ReFreelancer = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (alt) => {
        if (alt === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    const mapData = [
        {
            color: "white",
            border: "#d7d7d7",
            name: "개발자",
            icon: "🤍",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "함께일하고 싶은 최고를 꿈꾸는 개발자 입니다.",
            subTitle: "0년 경력 종*혁",
            rank: "5.0",
        },
        {
            color: "#b57360",
            border: "#b57360",
            name: "디자이너",
            icon: "🤍",
            url: `${companyLogo}`,
            language: "React",
            language2: "Javascript",
            title: "에너지가 꽉찬 디자이너 이*기 입니다.",
            subTitle: "1년 경력 이*기",
            rank: "4.5",
        },
        {
            color: "#8a7fb4",
            border: "#8a7fb4",
            name: "기획자",
            icon: "🤍",
            url: `${samsung}`,
            language: "JAVA",
            language2: "Spring",
            title: "준비된 기획자 입니다.",
            subTitle: "12년 경력 장*건",
            rank: "3.2",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "퍼블리셔",
            icon: "🤍",
            url: `${cjLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "최상의 결과를 만들어 내는 퍼블리셔 입니다.",
            subTitle: "3년 경력 오*혁",
            rank: "2.8",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "개발자",
            icon: "🤍",
            url: `${kbLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "믿을 수 있는 결과를 만드는 전공 개발자 입니다.",
            subTitle: "0년 경력 김*빈",
            rank: "4.2",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "개발자",
            icon: "🤍",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "미래를 꿈꾸는 최상 실력의 개발자 입니다.",
            subTitle: "6년 경력 조*성",
            rank: "3.8",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "개발자",
            icon: "🤍",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "항상 만족한 결과를 만들어낸 개발자 입니다.",
            subTitle: "2년 경력 송*기",
            rank: "4.0",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "개발자",
            icon: "🤍",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "믿을 수 있는 개발자 주*모 입니다.",
            subTitle: "10년 경력 주*모",
            rank: "3",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "개발자",
            icon: "🤍",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "최상의 결과를 만들어내는 개발자 입니다.",
            subTitle: "6년 경력 조*성",
            rank: "4.5",
        },
    ];

    return (
        <S.Container>
            <S.FirstDiv>
                <h1>추천 프로젝트</h1>
                <S.ButtonDiv>
                    <S.Img
                        src={left}
                        alt="left"
                        direction="left"
                        onClick={() => handleClick("left")}
                    />
                    <S.Img
                        src={right}
                        alt="right"
                        direction="right"
                        onClick={() => handleClick("right")}
                    />
                </S.ButtonDiv>
            </S.FirstDiv>
            <S.SecondDiv slideIndex={slideIndex}>
                {mapData.map((item, i) => {
                    return (
                        <S.ProjectDiv key={item.subTitle}>
                            <S.UpDiv color={item.color} border={item.border}>
                                <S.DivTag>
                                    <S.SpanTag>{item.name}</S.SpanTag>
                                    <S.HeartBackDiv>
                                        <S.HearDiv>{item.icon}</S.HearDiv>
                                    </S.HeartBackDiv>
                                </S.DivTag>
                            </S.UpDiv>
                            <S.DownDiv>
                                <S.DownSmallDiv>
                                    <S.BigSpan>
                                        <S.MiniSpan>{item.language}</S.MiniSpan>
                                        <S.MiniSpan>
                                            {item.language2}
                                        </S.MiniSpan>
                                    </S.BigSpan>
                                    <S.TextaTag href="#">
                                        {item.title}
                                    </S.TextaTag>
                                    <S.FlexDiv>
                                        <S.Ptag>{item.subTitle}</S.Ptag>
                                        <S.Ptag> ★{item.rank}</S.Ptag>
                                    </S.FlexDiv>
                                </S.DownSmallDiv>
                            </S.DownDiv>
                        </S.ProjectDiv>
                    );
                })}
                ;
            </S.SecondDiv>
            <S.LastDiv>
                <S.LastSpan>더보기</S.LastSpan>
            </S.LastDiv>
        </S.Container>
    );
};

export default ReFreelancer;
