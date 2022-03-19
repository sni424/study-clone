import { AccountCircleOutlined, MenuOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Logo from "../../asset/Image/elancer_logo.png"

const HeaderDiv = styled.div`
width:60%;
height:100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 35px auto;
`;
const Img = styled.img`
width:27vh;
`;
const Text = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;
const ThreeTag = styled.div`
padding: 0 5px;
cursor: pointer;
font-size: 15.75px;
font-weight: 800;
`;
const Menu = styled.div`
width:10%;
height: 40px;
border: 2px solid #DCDCDC;
border-radius: 5vh;
display:flex;
align-items: center;
justify-content: center;
`;

const Span = styled.span`
margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderDiv>
        <Img src={Logo} alt="Logo" />
        <Text>
            <ThreeTag>프리랜서 보기</ThreeTag>
            <ThreeTag>|</ThreeTag>
            <ThreeTag>프로젝트 보기</ThreeTag>
        </Text>
        <Menu>
            <Span>
            <MenuOutlined sx={{ fontSize: 40 }} />
            </Span>
            <Span>
            <AccountCircleOutlined sx={{ fontSize: 40 }} />
            </Span>
        </Menu>
    </HeaderDiv>
  )
}

export default Header