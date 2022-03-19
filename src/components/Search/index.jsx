import styled from 'styled-components';
import zoom from '../../asset/Image/zoom.png'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const InputForm = styled.form`
width: 60%;
height: 9vh;
display: flex;
align-items: center;
justify-content: space-between;
overflow: auto;
border-radius: 5vh;
border: 2px solid transparent;
background-image: linear-gradient(#fff, #fff), 
linear-gradient(to right, blue 0,  orange 100%);
background-origin: border-box;
background-clip: content-box, border-box;
`;

const Input = styled.input`
margin-left: 15px;
padding-left: 15px;
width: 85%;
height: 90%;
border: none;
outline:none;
font-weight : bold ;
font-size:18px;

&::placeholder{
    font-size: 18px;
    font-weight: 600;
}
`;

const Img = styled.img`
cursor: pointer;
margin: 0 auto;
`;

const SearchBar = () => {
  return (
    <Container>
    <InputForm>
        <Input placeholder='어떤 프로젝트를 찾으세요? 
    ' />
        <Img src={zoom} alt="zoom" />
    </InputForm>
    </Container>
  )
}

export default SearchBar;