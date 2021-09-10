import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    // APIのURI
    //   baseURL: "https://twitter.com",
    baseURL: "https://www.yahoo.co.jp/",
    // リクエストヘッダ
    headers: {
        "Access-Control-Allow-Origin": true,
        "Content-type": "application/json",
    },
});

export default apiClient;