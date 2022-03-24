import { useState } from 'react'
import {S} from './style'
import left from '../../asset/image/bt-left.png'
import right from '../../asset/image/bt-right.png'
import companyLogo from '../../asset/image/company-logo_1.png'
import samsung from '../../asset/image/samsung.png'
import cjLogo from '../../asset/image/cj-logo.png'
import kbLogo from '../../asset/image/kbkookmin.png'

const ReFreelancer = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const mapData = [{color:"white", border:"#d7d7d7" , name:"개발자",icon:"🤍",url:`${companyLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/신도림역] 프롭테스 플랫폼 스마트워킹",subTitle:"0년 경력 종*혁"},
  {color:"#b57360", border:"#b57360", name:"디자이너",icon:"🤍",url:`${companyLogo}`,endDay:"마감8일전",language:"React",language2:"Javascript",
  title:"[중급~고급/JAVA/4개월/압구정역] LF 패션몰 구착",subTitle:"1년 경력 이*기"},
  {color:"#8a7fb4", border:"#8a7fb4", name:"기획자",icon:"🤍",url:`${samsung}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"12년 경력 장*건"},
  {color:"white", border:"#d7d7d7", name:"퍼블리셔",icon:"🤍",url:`${cjLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"3년 경력 오*혁"},
  {color:"white", border:"#d7d7d7", name:"개발자",icon:"🤍",url:`${kbLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"0년 경력 김*빈"},
  {color:"white", border:"#d7d7d7", name:"개발자",icon:"🤍",url:`${companyLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"6년 경력 조*성"},
  {color:"white", border:"#d7d7d7", name:"개발자",icon:"🤍",url:`${companyLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"6년 경력 조*성"},
  {color:"white", border:"#d7d7d7", name:"개발자",icon:"🤍",url:`${companyLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"6년 경력 조*성"},
  {color:"white", border:"#d7d7d7", name:"개발자",icon:"🤍",url:`${companyLogo}`,endDay:"마감8일전",language:"JAVA",language2:"Spring",
  title:"[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹",subTitle:"6년 경력 조*성"},
]

  return (
    <S.Container>
        <S.FirstDiv >
            <h1>추천 프로젝트</h1>
            <S.ButtonDiv>
                <S.Img src={left} alt="left" direction="left" onClick={() => handleClick('left')}/>
                <S.Img src={right} alt="right" direction="right" onClick={() => handleClick('right')}/>
            </S.ButtonDiv>
        </S.FirstDiv>
        <S.SecondDiv slideIndex={slideIndex}>
 {mapData.map((item,i) => {
   return (
   <S.ProjectDiv key={i}>
     <S.UpDiv color={item.color} border={item.border}>
     <S.DivTag>
     <S.SpanTag >{item.name}</S.SpanTag>
     <S.HeartBackDiv>
                    <S.HearDiv>
                      {item.icon}
                    </S.HearDiv>
                  </S.HeartBackDiv>
     </S.DivTag>  
     </S.UpDiv>
     <S.DownDiv >
       <S.DownSmallDiv>
       <S.BigSpan>
         <S.MiniSpan>{item.endDay}</S.MiniSpan>
         <S.MiniSecond>{item.language}</S.MiniSecond>
         <S.MiniSecond>{item.language2}</S.MiniSecond>
       </S.BigSpan>
       <S.TextaTag href='#'>{item.title}</S.TextaTag>
       <S.Ptag>{item.subTitle}</S.Ptag>
       </S.DownSmallDiv>
     </S.DownDiv>
     </S.ProjectDiv>
 )})};
        </S.SecondDiv>
        <S.LastDiv>
            <S.LastSpan>더보기</S.LastSpan>
        </S.LastDiv>
    </S.Container>
  )
}

export default ReFreelancer