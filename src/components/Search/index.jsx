import {S} from "./style"
import zoom from '../../asset/image/zoom.png'

const SearchBar = () => {
  return (
    <S.Container>
    <S.InputForm>
        <S.Input placeholder='어떤 프로젝트를 찾으세요? 
    ' />
        <S.Img src={zoom} alt="zoom" />
    </S.InputForm>
    </S.Container>
  )
}

export default SearchBar;