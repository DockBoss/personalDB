import styled from "styled-components";
import * as colors from "./colors";

//styled div for NavBar
const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100px;
    background-color: ${colors.light};
    border-bottom-style: outset;
    border-bottom-width: 10px;
    border-bottom-color: ${colors.medium};
    box-shadow: 1px 10px 25px ${colors.dark};
    margin: 0px;
`;



export default NavBar;