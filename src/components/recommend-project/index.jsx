import { useState } from 'react'
import {S} from './style'
import left from '../../asset/image/bt-left.png'
import right from '../../asset/image/bt-right.png'

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
            <S.ProjectDiv color="blue" />
            <S.ProjectDiv  color="blue" />
            <S.ProjectDiv color="blue" />
            <S.ProjectDiv color="red" />
            <S.ProjectDiv color="red" />
            <S.ProjectDiv color="red" />
        </S.SecondDiv>
    </S.Container>
  )
}

export default ReProject