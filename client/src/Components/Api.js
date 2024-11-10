import axios from "axios";

const baseURL = "https://organdonor.onrender.com";

export default axios.create({ baseURL: baseURL });
