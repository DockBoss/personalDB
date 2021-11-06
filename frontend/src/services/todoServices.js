import axios from "axios";
const getAll = 'http://localhost:3001/todo/getAllTasks';
const getActive = 'http://localhost:3001/todo/getActiveTasks';
//I will add fancy shit to append the different endings to the base URI when it is needed, but not now

export function getAllTasks(){
    return axios.get(getAll);
}

export function getActiveTasks(){
    return axios.get(getActive);
}
//todo send tasks?