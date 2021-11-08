import React from "react";
import styled from "styled-components";
import * as colors from "./colors";
//testing out 3d blocks

const BlockDivWrapper = styled.div`
margin-top: 50px;
align-self: center;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 90vw;
height: 66vh;
`;
const BlockDiv = styled.div`
margin: 0px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: end;
`;

//ON the right path need to play around with box shadows more
const BlockBase = styled.div`
z-index: -1;
margin: 0px;
width:66vw;
height: 5vh;
padding: 10px;
border-style: solid;
border-color: ${colors.layer1Dark};
border-width: 1px 1px 1px 1px;
background-color: ${colors.layer0Dark};
box-shadow: 
1px -1px ${colors.layer1Dark},
2px -2px ${colors.layer1Dark},
3px -3px ${colors.layer1Dark},
4px -4px ${colors.layer1Dark},
5px -5px ${colors.layer1Dark},
10px 4px 15px ${colors.layer4Dark};
`;

const Block = styled.div`
width:10vw;
height: 50vh;
border-style: solid;
border-width: 1px;
`;

const GreenBlock = styled(Block)`
background-color: ${colors.greenLayer0Light};
border-color: ${colors.greenLayer0Dark};
box-shadow:
1px -1px ${colors.greenLayer1Dark},
2px -2px ${colors.greenLayer1Dark},
3px -3px ${colors.greenLayer1Dark},
4px -4px ${colors.greenLayer1Dark},
5px -5px ${colors.greenLayer1Dark},
15px 0px 10px ${colors.layer4Dark};
`;

export default class BlockTest extends React.Component {

	render() {
		return(
			<BlockDivWrapper>
				<BlockDiv>
					<GreenBlock />
				</BlockDiv>
				<BlockBase />
			</BlockDivWrapper>
		);
	}
}