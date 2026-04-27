import styled from "styled-components";
import { Flexible } from "../../../GlobalStyle";

export const ThirdPageBlockPart = styled(Flexible)`
    flex-direction: column;
    gap: 40px;
`
export const ThirdPageBlockPartSvg = styled.div`
    position: relative; 
    img {
      
        max-width: none;
    }

`
export const ThirdPageBlockPartContext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 12px;
`
