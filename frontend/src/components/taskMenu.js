import React from 'react';
import styled from "styled-components";
import * as colors from "./colors";


const TaskDiv = styled.form`
  width: 33vw;
  margin-top: 40px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
    border-style: inset;
    border-color: ${colors.greenLayer0Dark} ${colors.greenLayer0Dark} ${colors.greenLayer0Light} ${colors.greenLayer0Light};
      border-width: 15px 15px 20px 20px;
    background-color: ${colors.greenLayer1Dark};
`;

const TaskInput = styled.input`
  grid-area: title;
  color: ${colors.electricDark};
  font-size: 20px;
  border-style: inset;
  border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
    ${colors.greenLayer1Light};
  border-width: 5px 5px 10px 10px;
  background-color: ${colors.layer0Light};
  margin: 0px 20px 10px 0px;
`;
const Select = styled.select`
overflow: hidden;
 border-style: inset;
 border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
   ${colors.greenLayer1Light};
   border-width: 5px 5px 10px 10px;
 background-color: ${colors.layer0Light};
 margin: 10px 0px 10px 20px;
text-align-last: center;
`;
const Option = styled.option`
font-size: 15px;
color: ${colors.darkSecondary};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin: 10px 15px 0px 15px;
`;


const DescriptionInput = styled.textarea`
color: ${colors.electricDark};
  font-size: 15px;
  border-style: inset;
  border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
    ${colors.greenLayer1Light};
    border-width: 5px 5px 10px 10px;
  background-color: ${colors.layer0Light};
  margin: 10px 20px 10px 0px;
`;
const SubmitButton = styled.button`
 color: ${colors.dark};
 font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-style: inset;
  border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light} ${colors.greenLayer1Light};
  border-width: 5px 5px 10px 10px;
  background-color: ${colors.layer0Light};
  margin: 10px 0px 0px 20px;
`;

 class TaskMenu extends React.Component{

  render() {
    return (
      <TaskDiv action="/tests" method="POST" target="_blank" enctype="multipart/form-data" > 
        <TaskInput required type="text" name = 'task'/>
           <Select size = "2" name = "category">
             <Option value="Work" >Work</Option>
             <Option value="Life">Life</Option>
             <Option value="Personal Programming">Personal Programming</Option>
             <Option value="Finances">Finances</Option>
             <Option value="3D Printing">3D Printing</Option>
             </Select> 
        <DescriptionInput required type = "text" name="description" rows = "5"/>
        <SubmitButton>Submit</SubmitButton>
      </TaskDiv>
    );
  };
}


export default TaskMenu;
// I think this might be a better way to do it?
//https://stackoverflow.com/questions/59738188/styling-nested-components-in-styled-components
