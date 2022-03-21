import styled from "styled-components";
import "../../App.css";

export const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    color: #8c8c8c;
    font-size: 1.1rem;
    font-weight: 800;
    padding: 30px 0;
  `,
  FirstDiv: styled.div`
    border-right: 1px solid #8c8c8c;
    text-align: center;
    padding: 0 40px;
  `,
  SeconddDiv: styled.div`
    text-align: center;
  `,
  ThirdDiv: styled.div`
    border-left: 1px solid #8c8c8c;
    text-align: center;
    padding: 0 40px;
  `,
  WordSpan: styled.span`
    display: block;
    font-size: 0.985rem;
  `,
  NumberSpan: styled.span`
    color: #252525;
    font-size: 28px;
    display: inline-block;
  `,
};
