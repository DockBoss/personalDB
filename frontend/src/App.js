import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/navBar.js";
import TaskMenu from "./components/taskMenu.js";
import TodoList from "./components/todoList.js";
import * as colors from "./components/colors";
import Tests from "./components/test"
const Wrapper = styled.div`
  margin: 0px;
  margin-top: 100px;
  padding: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  background-color: ${colors.layer0Dark}
`;

const StyledLink = styled.div`
  text-align: center;
  color: ${colors.darkSecondary};
  border-width: 10px;
  border-style: ridge;
  width: 15vw;
  margin: 0px;
  padding: 10px;
  box-shadow: 2px 5px 5px ${colors.dark};
`;

const TodoLinkDiv = styled(StyledLink)`
border-color: ${colors.electric};
background-color: ${colors.electric};
`;
const OrangeLinkDiv = styled(StyledLink)`
border-color: ${colors.orange};
background-color: ${colors.orange};
`;
const BlueLinkDiv = styled(StyledLink)`
border-color: ${colors.blue};
background-color: ${colors.blue};
`;
const GreenLinkDiv = styled(StyledLink)`
border-color: ${colors.greenLayer0Light};
background-color: ${colors.greenLayer0Light};
`;
const PurpleLinkDiv = styled(StyledLink)`
border-color: ${colors.purple};
background-color: ${colors.purple};
`;

//Building the application out of components
export default function App(props) {
  return (
    <Wrapper>
      <Router>
        <NavBar>
          <Link to="/todo">
          <GreenLinkDiv>ToDo</GreenLinkDiv>
          </Link>
          <Link to="/home">
            <OrangeLinkDiv>Test</OrangeLinkDiv>
          </Link>
          <Link to="/">
            <BlueLinkDiv>Test</BlueLinkDiv>
          </Link>
          <Link to="">
            <GreenLinkDiv>Test</GreenLinkDiv>
          </Link>
          <Link to="">
            <PurpleLinkDiv>Test</PurpleLinkDiv>
          </Link>
        </NavBar>
        <Switch>
          <Route path="/todo">
            <TaskMenu />
            <TodoList />
          </Route>
          <Route path="/home">
            <Tests />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}
