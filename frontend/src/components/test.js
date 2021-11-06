import React from "react";
import styled from "styled-components";
import * as colors from "./colors";
//testing out 3d nesting
// top right bottom left
const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  border-style: inset;
  border-color: ${colors.layer0Dark} ${colors.layer0Dark} ${colors.layer0Light}
    ${colors.layer0Light};
  border-width: 20px;
  background-color: ${colors.layer0Dark};
`;

const TestItem = styled.div`
  margin: 15px;
	padding: 10px;
  border-style: inset;
  border-color: ${colors.layer1Dark} ${colors.layer1Dark} ${colors.layer1Light}
    ${colors.layer1Light};
  border-width: 15px;
  background-color: ${colors.layer1Dark};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TestItem2 = styled.div`
  margin: 10px;
	padding: 10px;
  border-style: inset;
  border-color: ${colors.layer2Dark} ${colors.layer2Dark} ${colors.layer2Light}
    ${colors.layer2Light};
  border-width: 10px;
  background-color: ${colors.layer2Dark};
`;


export default class Tests extends React.Component {
  render() {
    return (
      <Test>
        <TestItem>
          <TestItem2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
            placerat imperdiet.
          </TestItem2>
          <TestItem2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
            placerat imperdiet.
          </TestItem2>
        </TestItem>

        <TestItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
          placerat imperdiet.
        </TestItem>
        <TestItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
          placerat imperdiet.
        </TestItem>
        <TestItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
          placerat imperdiet.
        </TestItem>

        <TestItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
          placerat imperdiet. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Phasellus dictum magna id
          sem bibendum vehicula. Duis in condimentum libero. Quisque maximus,
          diam non accumsan luctus, turpis diam tempus elit, non eleifend metus
          quam vel ligula. Aenean lobortis velit urna, ut porta tellus accumsan
          ac. Donec sollicitudin congue ante, a consectetur turpis porttitor
          sed. Maecenas sit amet turpis at augue.
        </TestItem>

        <TestItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam
          placerat imperdiet.
        </TestItem>

      </Test>
    );
  }
}
