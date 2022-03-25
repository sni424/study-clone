import { S } from "./style";
import useStore from "../../zustand";

const Blind = ({ changeSet }) => {
    const changetrue = useStore((state) => state.changetrue);

    const changeShow = () => {
        return changetrue();
    };

    return <S.Container onClick={changeShow} />;
};

export default Blind;
