import { useState } from 'react'
import {S} from './style'

const MenuBar = () => {

    const [show,setShow] = useState(true);

  return (
      <>
      { show===true &&
      <S.Container>
    <S.FirstDiv>
        <S.Ultag>
            <S.UpLiTag>로그인</S.UpLiTag>
            <S.UpLiTag>회원가입</S.UpLiTag>
            <S.LineTag />
            <S.DownLiTag>커뮤니티</S.DownLiTag>
            <S.DownLiTag>이용안내</S.DownLiTag>
            <S.DownLiTag>코워킹 스페이스</S.DownLiTag>
            <S.DownLiTag>굿즈</S.DownLiTag>   
        </S.Ultag>
    </S.FirstDiv>
    </S.Container>
      }
      </>
  )
}

export default MenuBar