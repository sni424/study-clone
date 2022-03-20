import { useState } from 'react'
import {S} from './style'

const Count = () => {

    const [useCount,setUseCount] = useState(0);

  return (
      <>
    <S.Container>
        <S.FirstDiv>
            총 프리랜서 수
            <div>{useCount}명</div>
        </S.FirstDiv>
        <S.SeconddDiv>
            총 프로젝트 금액
            <div>{useCount}원</div>
        </S.SeconddDiv>
        <S.ThirdDiv>
            총 프로젝트 수
            <div>{useCount}권</div>
        </S.ThirdDiv>
    </S.Container>
    </>
  )
}

export default Count