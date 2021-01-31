import {api} from "../Backend"

//const api2 = "http://127.0.0.1:5000/"

export const getData = () => {
    return fetch(`${api}`, {
        method: "POST",
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}