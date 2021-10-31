import React from 'react';
import styled from "styled-components";
import * as colors from "./colors";


const TaskDiv = styled.form`
  background-color: ${colors.light};
  width: 85vw;
  height: 200px;
  border: 15px inset ${colors.electric};
  margin-top: 40px;
  display: grid;
  grid-template-areas:
    "title submit"
    "description category";
  padding: 0px;
`;

const TaskInput = styled.input`
  border: 10px inset ${colors.electric};
  grid-area: title;
  color: ${colors.electricDark};
  font-size: 20px;
`;

const DescriptionInput = styled.textarea`
border: 10px inset ${colors.electric};
grid-area: description;
color: ${colors.electricDark};
  font-size: 15px;
`;
const SubmitButton = styled.button`
background-color: ${colors.light};
 color: ${colors.dark};
border: 10px inset ${colors.electric};
grid-area: submit;
  width: auto;
  margin: 0px;
  cursor: pointer;
`;

const Select = styled.select`
 background-color: ${colors.light};
 border: 10px inset ${colors.electric};  
 grid-area: category;
`;
const Option = styled.option`
font-size: 15px;
  color: ${colors.electricDark};
  cursor: pointer;
  overflow-y: hidden;
`;

 class TaskMenu extends React.Component{

  render() {
    return (
      <TaskDiv action="/tests" method="POST" target="_blank" enctype="multipart/form-data" > 
        <TaskInput required type="text" name = 'task'/>
           <Select size = "5" name = "category">
             <Option value="Work" >Work</Option>
             <Option value="Life">Life</Option>
             <Option value="Personal Programming">Personal Programming</Option>
             <Option value="Finances">Finances</Option>
             <Option value="3D Printing">3D Printing</Option>
             </Select> 
        <DescriptionInput required type = "text" name="description"/>
        <SubmitButton>Submit</SubmitButton>
      </TaskDiv>
    );
  };
}


export default TaskMenu;
// I think this might be a better way to do it?
//https://stackoverflow.com/questions/59738188/styling-nested-components-in-styled-components
