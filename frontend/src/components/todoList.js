import React from "react";
import styled from "styled-components";
import { getTasks } from "../services/todoServices.js";
import * as colors from "./colors"

const TodoDiv = styled.div`
  background-color: #ffff;
  width: 85vw;
  height: auto;
  border: 20px inset ${colors.electric};
  margin: 25px;
  display: flex;
  flex-direction: column;
`;
const TaskView = styled.div`
  background-color: #fff;
  border-style: inset;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 20px;
  border-top-width: 15px;
  border-color: ${colors.electric};
  display: grid;
grid-template-areas:
  "task description completed"
  "task description completed"
  "category description date";
`;

const TaskDes = styled.p`
grid-area: description;
`;
const TaskCat = styled.p`
grid-area: category;
`;
const TaskDate = styled.p`
grid-area: date;
`;
const TaskComplete = styled.p`
grid-area: completed;
`;
const TaskTitle = styled.h3`
grid-area: task;
`;



export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  //runs after components are rendered
  async componentDidMount() {
    try {
      const { data } = await getTasks();
      console.log(data);
      this.setState({ tasks: data });
    } catch (e) {
      console.error(e);
    }
  }
  // runs if/when the component is removed from the DOM
  componentWillUnmount() {}

  render() {
    return (
      <TodoDiv>
        {this.state.tasks.map(function (taskObj) {
          return (
            <TaskView>
           
              <TaskTitle>{taskObj.task}</TaskTitle>
              <TaskDes>{taskObj.description}</TaskDes>
              <TaskCat>{taskObj.category}</TaskCat>
              <TaskComplete>{taskObj.completed == false ? "Not Done" : "Done"}</TaskComplete>
              <TaskDate>{taskObj.dateCreated}</TaskDate>
             
            </TaskView>
          );
        })}
      </TodoDiv>
    );
  }
}
