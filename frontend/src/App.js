import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/navBar.js";
import TaskMenu from "./components/taskMenu.js";
import TodoFilter from "./components/todoFilter.js";
import TodoList from "./components/todoList.js";
import * as colors from "./components/colors";
import Tests from "./components/test"
import BlockTest from "./components/blockTest"
const Wrapper = styled.div`
  margin: 0px;
  margin-top: 100px;
  padding: 0px;
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const RowDiv = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-x: hidden;
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

const OrangeLinkDiv = styled(StyledLink)`
border-color: ${colors.orangeLayer0Light};
background-color: ${colors.orangeLayer0Light};
`;
const BlueLinkDiv = styled(StyledLink)`
border-color: ${colors.blueLayer0Light};
background-color: ${colors.blueLayer0Light};
`;
const GreenLinkDiv = styled(StyledLink)`
border-color: ${colors.greenLayer0Light};
background-color: ${colors.greenLayer0Light};
`;
const PurpleLinkDiv = styled(StyledLink)`
border-color: ${colors.purpleLayer0Light};
background-color: ${colors.purpleLayer0Light};
`;

//Building the application out of components
export default class App extends React.Component {
  render(){
  return (
    <Wrapper>
      <Router>
        <NavBar>
          <Link to="/todo">
          <GreenLinkDiv>ToDo</GreenLinkDiv>
          </Link>
          <Link to="/home">
            <OrangeLinkDiv>Depth Test</OrangeLinkDiv>
          </Link>
          <Link to="/">
            <BlueLinkDiv>Test</BlueLinkDiv>
          </Link>
          <Link to="">
            <GreenLinkDiv>Test</GreenLinkDiv>
          </Link>
          <Link to="/blocks">
            <PurpleLinkDiv>Block Test</PurpleLinkDiv>
          </Link>
        </NavBar>
        <Switch>
          <Route path="/todo">
            <RowDiv>
            <TaskMenu />
            <TodoFilter />
            </RowDiv>
            <TodoList />
          </Route>
          <Route path="/home">
            <Tests />
          </Route>
          <Route path = "/blocks">
            <BlockTest />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
  }
}
