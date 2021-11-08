import React from 'react';
import styled from "styled-components";
import {HorizontalSelect, Option} from "./horizontalSelect.js"

import * as colors from "./colors";


const TaskDiv = styled.form`
  width: 33vw;
  height: 14vw;
  margin-top: 40px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    border-style: inset;
    border-color: ${colors.greenLayer0Dark} ${colors.greenLayer0Dark} ${colors.greenLayer0Light} ${colors.greenLayer0Light};
      border-width: 15px 15px 20px 20px;
    background-color: ${colors.greenLayer1Dark};
`;

const TaskInput = styled.input`
  grid-area: title;
  color: ${colors.layer4Dark};
  font-size: 20px;
  border-style: inset;
  border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
    ${colors.greenLayer1Light};
  border-width: 5px 5px 10px 10px;
  background-color: ${colors.layer0Light};
  margin: 0px 20px 10px 0px;
`;
const StyHorizontalSelect = styled(HorizontalSelect)`
  border-style: inset;
 border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
   ${colors.greenLayer1Light};
   border-width: 5px 5px 10px 10px;
 background-color: ${colors.layer0Light};
 margin: 10px 0px 10px 20px;

`;



const DescriptionInput = styled.textarea`
color: ${colors.layer4Dark};
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
 padding: 5px;
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
      <TaskDiv action="todo/createTask" method="POST" target="_blank" enctype="multipart/form-data" > 
        <TaskInput required type="text" name = 'task' />
           <StyHorizontalSelect size = "2" name = "category">
             <Option value="Work" >Work</Option>
             <Option value="Life">Life</Option>
             <Option value="Personal Programming">Personal Programming</Option>
             <Option value="Finances">Finances</Option>
             <Option value="3D Printing">3D Printing</Option>
             </StyHorizontalSelect> 
        <DescriptionInput required type = "text" name="description" rows = "3"/>
        <SubmitButton>Submit</SubmitButton>
      </TaskDiv>
    );
  };
}


export default TaskMenu;
// I think this might be a better way to do it?
//https://stackoverflow.com/questions/59738188/styling-nested-components-in-styled-components
