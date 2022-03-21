import { useState } from 'react'
import {S} from './style'
import left from '../../asset/image/bt-left.png'
import right from '../../asset/image/bt-right.png'
import samsung from '../../asset/image/company-logo_1.png'

const ReProject = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <S.Container>
        <S.FirstDiv >
            <h1>추천 프로젝트</h1>
            <S.ButtonDiv>
                <S.Img src={left} alt="left" direction="left" onClick={() => handleClick('left')}/>
                <S.Img src={right} alt="right" direction="right" onClick={() => handleClick('left')}/>
            </S.ButtonDiv>
        </S.FirstDiv>
        <S.SecondDiv slideIndex={slideIndex}>
            <S.ProjectDiv >
              <S.UpDiv>
                <S.BackImg url={samsung}></S.BackImg>
              </S.UpDiv>
              <S.DownDiv />
              </S.ProjectDiv>
              <S.ProjectDiv >
              <S.UpDiv />
              <S.DownDiv />
              </S.ProjectDiv>            <S.ProjectDiv >
              <S.UpDiv />
              <S.DownDiv />
              </S.ProjectDiv>            <S.ProjectDiv >
              <S.UpDiv />
              <S.DownDiv />
              </S.ProjectDiv>            <S.ProjectDiv >
              <S.UpDiv />
              <S.DownDiv />
              </S.ProjectDiv>            <S.ProjectDiv >
              <S.UpDiv />
              <S.DownDiv />
              </S.ProjectDiv>            <S.ProjectDiv >
              <S.UpDiv />
              <S.DownDiv />
              </S.ProjectDiv>
        </S.SecondDiv>
    </S.Container>
  )
}

export default ReProject