import styled from "styled-components";

export const S = {
  Container: styled.div``,
  FirstDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
  `,
  IconDiv: styled.div`
    width: 23%;
    height: 70px;
    background-color: ${(props) => props.color};
    border: 1px solid none;
    border-radius: 15px;
    margin: 0 15px 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Img: styled.img`
    width: 21%;
    padding-left: 8px;
  `,
  TextSpan: styled.span`
    font-size: 1.1rem;
    color: white;
    margin-right: 7px;
  `,
};
