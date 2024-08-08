import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "df9b6e1bd72b4c07bd45b578c11b3a59"
    }
})