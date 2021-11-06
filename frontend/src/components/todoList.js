import React from "react";
import styled from "styled-components";
import { getAllTasks, getActiveTasks } from "../services/todoServices.js";
import * as colors from "./colors"

const TodoDiv = styled.div`
	background-color: #ffff;
	width: 66vw;
	height: auto;
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	border-style: inset;
		border-color: ${colors.greenLayer0Dark} ${colors.greenLayer0Dark} ${colors.greenLayer0Light} ${colors.greenLayer0Light};
			border-width: 15px 15px 20px 20px;
		background-color: ${colors.greenLayer1Dark};
`;
const TaskView = styled.div`
	background-color: #fff;
	display: grid;
	grid-template-areas: "task description dueDate done"
	"cat description dateAdded done";
	padding: 0px;
	border-style: inset;
	border-color: ${colors.greenLayer1Dark} ${colors.greenLayer1Dark} ${colors.greenLayer1Light}
		${colors.greenLayer1Light};
	border-width: 5px 5px 10px 10px;
	background-color: ${colors.greenLayer2Dark};
	margin: 0px 0px 10px 0px; 
`;


const TaskTitle = styled.h3`
grid-area: task;
border-style: inset;
	border-color: ${colors.greenLayer1Dark} ${colors.greenLayer2Dark} ${colors.greenLayer2Light}
		${colors.greenLayer2Light};
	border-width: 5px 5px 10px 10px;
	background-color: ${colors.layer0Light};
	margin: 0px 0px 10px 20px;
	padding: 10px 10px 10px 10px;
	width: 10vw;
`;

const BaseP = styled.p`
border-style: inset;
	border-color: ${colors.greenLayer2Dark} ${colors.greenLayer2Dark} ${colors.greenLayer2Light}
		${colors.greenLayer2Light};
	border-width: 5px 5px 10px 10px;
	background-color: ${colors.layer0Light};
`;

const TaskCat = styled(BaseP)`
grid-area: cat;
padding: 10px 10px 10px 10px;
margin: 10px 20px 20px 0px;
`;
const TaskDes = styled(BaseP)`
grid-area: description;
padding: 10px 10px 10px 10px;
margin: 20px 0px 20px 0px;
`;
const TaskDate = styled(BaseP)`
grid-area: dateAdded;
padding: 10px 10px 10px 10px;
margin: 10px 20px 0px 20px;
`;
const TaskDueDate = styled(BaseP)`
grid-area: dueDate;
padding: 10px 10px 10px 10px;
margin: 0px 20px 10px 0px;
`;
const TaskComplete = styled(BaseP)`
grid-area: done;
padding: 10px 10px 10px 10px;
margin: 20px 20px 20px 0px;
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
			const { data } = await getActiveTasks();
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
							<TaskCat>{taskObj.category}</TaskCat>
							<TaskDes>{taskObj.description}</TaskDes>
							<TaskDueDate>Test</TaskDueDate>
							<TaskDate>{taskObj.dateCreated}</TaskDate>
							<TaskComplete>{taskObj.completed == false ? "Not Done" : "Done"}</TaskComplete>
						</TaskView>
					);
				})}
			</TodoDiv>
		);
	}
}
