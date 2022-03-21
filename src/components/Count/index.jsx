import { useState } from 'react'
import {S} from './style'
import CountUp from 'react-countup';


const Count = () => {

  return (
      <>
    <S.Container>
        <S.FirstDiv>
            <S.WordSpan>총 프리랜서 수</S.WordSpan>
            <S.NumberSpan><CountUp end={319314} separator="," duration={1} /></S.NumberSpan>
            <span>명</span>
        </S.FirstDiv>
        <S.SeconddDiv>
        <S.WordSpan>총 프로젝트 금액</S.WordSpan>
            <S.NumberSpan><CountUp end={72551710000} separator="," duration={1} /></S.NumberSpan>
            <span>원</span>
        </S.SeconddDiv>
        <S.ThirdDiv>
        <S.WordSpan>총 프로젝트 수</S.WordSpan>
            <S.NumberSpan><CountUp end={48821} separator="," duration={1} /></S.NumberSpan>
            <span>건</span>
        </S.ThirdDiv>
    </S.Container>
    </>
  )
}

export default Count