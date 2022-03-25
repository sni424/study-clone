import { S } from "./style";
import java from "../../asset/image/java.png";
import asp from "../../asset/image/asp.png";
import php from "../../asset/image/php.png";
import mobile from "../../asset/image/mobile.png";
import pub from "../../asset/image/pub.png";
import design from "../../asset/image/design.png";
import plan from "../../asset/image/plan.png";
import etc from "../../asset/image/etc.png";

const Eblock = () => {
    return (
        <S.Container>
            <h1>프로젝트 둘러보기</h1>
            <S.FirstDiv>
                <S.IconDiv color="#7485c9">
                    <S.Img src={java} alt="java" />
                    <S.TextSpan>JAVA</S.TextSpan>
                </S.IconDiv>
                <S.IconDiv color="#9d7985">
                    <S.Img src={asp} alt="java" />
                    <S.TextSpan>ASP.NET</S.TextSpan>
                </S.IconDiv>
                <S.IconDiv color="#d56b2d">
                    <S.Img src={php} alt="java" />
                    <S.TextSpan>PHP</S.TextSpan>
                </S.IconDiv>
                <S.IconDiv color="#f16300">
                    <S.Img src={mobile} alt="java" />
                    <S.TextSpan>IOS•Android</S.TextSpan>
                </S.IconDiv>
            </S.FirstDiv>
            <S.FirstDiv>
                <S.IconDiv color="#7485c9">
                    <S.Img src={pub} alt="java" />
                    <S.TextSpan>퍼블리싱</S.TextSpan>
                </S.IconDiv>
                <S.IconDiv color="#9d7985">
                    <S.Img src={design} alt="java" />
                    <S.TextSpan>디자인</S.TextSpan>
                </S.IconDiv>
                <S.IconDiv color="#d56b2d">
                    <S.Img src={plan} alt="java" />
                    <S.TextSpan>기획</S.TextSpan>
                </S.IconDiv>
                <S.IconDiv color="#f16300">
                    <S.Img src={etc} alt="java" />
                    <S.TextSpan>기타 </S.TextSpan>
                </S.IconDiv>
            </S.FirstDiv>
        </S.Container>
    );
};

export default Eblock;
