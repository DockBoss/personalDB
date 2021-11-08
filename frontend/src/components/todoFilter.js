import React from "react";
import styled from "styled-components";
import {HorizontalSelect, Option} from "./horizontalSelect.js"
import * as colors from "./colors";

const FilterDiv = styled.div`
  width: 33vw;
  height: 14vw;
  margin-top: 40px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: inset;
  border-color: ${colors.greenLayer0Dark} ${colors.greenLayer0Dark}
    ${colors.greenLayer0Light} ${colors.greenLayer0Light};
  border-width: 15px 15px 20px 20px;
  background-color: ${colors.greenLayer1Dark};
`;

const CatSelect = styled(HorizontalSelect)`
  border-style: inset;
 border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
   ${colors.greenLayer1Light};
   border-width: 5px 5px 10px 10px;
 background-color: ${colors.layer0Light};
 margin: 0px 0px 10px 20px;
`;

const DateSelect = styled(HorizontalSelect)`
border-style: inset;
border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
  ${colors.greenLayer1Light};
  border-width: 5px 5px 10px 10px;
background-color: ${colors.layer0Light};
margin: 10px 20px 10px 0px;
`;
const CompletedSelect = styled(HorizontalSelect)`
border-style: inset;
border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
  ${colors.greenLayer1Light};
  border-width: 5px 5px 10px 10px;
background-color: ${colors.layer0Light};
margin: 10px 0px 10px 20px;
`;
const FilterButton = styled.button`
color: ${colors.dark};
font-size: 20px;
 padding: 5px;
 cursor: pointer;
  border-style: inset;
  border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light} ${colors.greenLayer1Light};
  border-width: 5px 5px 10px 10px;
  background-color: ${colors.layer0Light};
  margin: 10px 20px 0px 0px;
`;

//TODO: add filter options for category, completed, date, 
export default class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return( 
	<FilterDiv>
		<CatSelect size = "2">
		<Option value="Work" >Work</Option>
             <Option value="Life">Life</Option>
             <Option value="Personal Programming">Personal Programming</Option>
             <Option value="Finances">Finances</Option>
             <Option value="3D Printing">3D Printing</Option>
		</CatSelect>
		<DateSelect size = "2">
		<Option value="Work" >Work</Option>
		<Option value="Work" >Work</Option>
		</DateSelect>
		<CompletedSelect size = "2">
		<Option value="Completed" >Completed</Option>
		<Option value="Not Completed" >Not Completed</Option>
		</CompletedSelect>
		<FilterButton>Filter</FilterButton>
	</FilterDiv>);
  }
}
