import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3090",//"http://d338cb892952.ngrok.io",//"http://localhost:3090",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNTk3MTYwMzA2LCJleHAiOjE1OTcxNzgzMDZ9.cEev9tAFMLZExehVqUI_gYl2U8kNf1gHfQ5u6oda1xE"
    }
});

