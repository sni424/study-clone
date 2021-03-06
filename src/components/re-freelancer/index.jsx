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
            name: "κ°λ°μ",
            icon: "π€",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "ν¨κ»μΌνκ³  μΆμ μ΅κ³ λ₯Ό κΏκΎΈλ κ°λ°μ μλλ€.",
            subTitle: "0λ κ²½λ ₯ μ’*ν",
            rank: "5.0",
        },
        {
            color: "#b57360",
            border: "#b57360",
            name: "λμμ΄λ",
            icon: "π€",
            url: `${companyLogo}`,
            language: "React",
            language2: "Javascript",
            title: "μλμ§κ° κ½μ°¬ λμμ΄λ μ΄*κΈ° μλλ€.",
            subTitle: "1λ κ²½λ ₯ μ΄*κΈ°",
            rank: "4.5",
        },
        {
            color: "#8a7fb4",
            border: "#8a7fb4",
            name: "κΈ°νμ",
            icon: "π€",
            url: `${samsung}`,
            language: "JAVA",
            language2: "Spring",
            title: "μ€λΉλ κΈ°νμ μλλ€.",
            subTitle: "12λ κ²½λ ₯ μ₯*κ±΄",
            rank: "3.2",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "νΌλΈλ¦¬μ",
            icon: "π€",
            url: `${cjLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "μ΅μμ κ²°κ³Όλ₯Ό λ§λ€μ΄ λ΄λ νΌλΈλ¦¬μ μλλ€.",
            subTitle: "3λ κ²½λ ₯ μ€*ν",
            rank: "2.8",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "κ°λ°μ",
            icon: "π€",
            url: `${kbLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "λ―Ώμ μ μλ κ²°κ³Όλ₯Ό λ§λλ μ κ³΅ κ°λ°μ μλλ€.",
            subTitle: "0λ κ²½λ ₯ κΉ*λΉ",
            rank: "4.2",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "κ°λ°μ",
            icon: "π€",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "λ―Έλλ₯Ό κΏκΎΈλ μ΅μ μ€λ ₯μ κ°λ°μ μλλ€.",
            subTitle: "6λ κ²½λ ₯ μ‘°*μ±",
            rank: "3.8",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "κ°λ°μ",
            icon: "π€",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "ν­μ λ§μ‘±ν κ²°κ³Όλ₯Ό λ§λ€μ΄λΈ κ°λ°μ μλλ€.",
            subTitle: "2λ κ²½λ ₯ μ‘*κΈ°",
            rank: "4.0",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "κ°λ°μ",
            icon: "π€",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "λ―Ώμ μ μλ κ°λ°μ μ£Ό*λͺ¨ μλλ€.",
            subTitle: "10λ κ²½λ ₯ μ£Ό*λͺ¨",
            rank: "3",
        },
        {
            color: "white",
            border: "#d7d7d7",
            name: "κ°λ°μ",
            icon: "π€",
            url: `${companyLogo}`,
            language: "JAVA",
            language2: "Spring",
            title: "μ΅μμ κ²°κ³Όλ₯Ό λ§λ€μ΄λ΄λ κ°λ°μ μλλ€.",
            subTitle: "6λ κ²½λ ₯ μ‘°*μ±",
            rank: "4.5",
        },
    ];

    return (
        <S.Container>
            <S.FirstDiv>
                <h1>μΆμ² νλ‘μ νΈ</h1>
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
                                        <S.Ptag> β{item.rank}</S.Ptag>
                                    </S.FlexDiv>
                                </S.DownSmallDiv>
                            </S.DownDiv>
                        </S.ProjectDiv>
                    );
                })}
                ;
            </S.SecondDiv>
            <S.LastDiv>
                <S.LastSpan>λλ³΄κΈ°</S.LastSpan>
            </S.LastDiv>
        </S.Container>
    );
};

export default ReFreelancer;
