import axios from "axios";
const uri = 'http://localhost:3001/getTasks';

export function getTasks(){
    return axios.get(uri)
}
//todo send tasks?