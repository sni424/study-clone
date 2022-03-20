import { AccountCircleOutlined, MenuOutlined } from "@material-ui/icons";
import {S} from "./style"
import Logo from "../../asset/image/elancer_logo.png"

const Header = () => {
  return (
    <S.HeaderDiv>
        <S.Img src={Logo} alt="Logo" />
        <S.Text>
            <S.ThreeTag>프리랜서 보기</S.ThreeTag>
            <S.ThreeTag>|</S.ThreeTag>
            <S.ThreeTag>프로젝트 보기</S.ThreeTag>
        </S.Text>
        <S.Menu>
            <S.Span>
            <MenuOutlined sx={{ fontSize: 40 }} />
            </S.Span>
            <S.Span>
            <AccountCircleOutlined sx={{ fontSize: 40 }} />
            </S.Span>
        </S.Menu>
    </S.HeaderDiv>
  )
}

export default Header