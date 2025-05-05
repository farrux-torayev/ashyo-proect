import axios from "axios";
import { API, API_E2 } from "./getEnv";

export const instance = () =>
    axios.create({
        baseURL: API,
        headers: {
            "Content-Type": "application/json",
        },
    });

export const instanceE2 = () => axios.create({baseURL:API_E2})