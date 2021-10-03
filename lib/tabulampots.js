import axios from "axios";
// import { serverName, token } from "./config"

const serverName = "http://localhost:8000/api/tabulampot";
const token = "5|xfmgvFbZPLlscQdKpJPXtdBRDUsZEvKZvRS1ezqS";
const config = {
    method: 'get',
    url: serverName,
    headers: {
        "Accept": 'application/json',
        "Authorization": 'Bearer ' + token
    }
}

export const getAllTabulampot = async () => await
    axios(config)
        .then(res => ({
            error: false,
            tabulampot: res.data,
        }))
        .catch(() => ({
            error: true,
            tabulampot: null,
        }),
        );