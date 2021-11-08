import styled from "styled-components";
import * as colors from "./colors";


const HorizontalSelect = styled.select`
overflow: hidden;
 text-align-last: center;
`;

const Option = styled.option`
font-size: 15px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin: 10px 15px 0px 15px;
  color: ${colors.darkSecondary};
`;

export {
    HorizontalSelect,
    Option
}