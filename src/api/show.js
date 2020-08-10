import axios from "axios";

export default axios.create({
    baseURL: "http://2066ecc7bfc6.ngrok.io",//"http://localhost:3090",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdm9uZGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZW5oYSIsImlhdCI6MTU5NzAyNzk0NiwiZXhwIjoxNTk3MDQ1OTQ2fQ.UMVWFVyJv1-1_xMscygfrU-Kj6XUdJavoH9IHIEQCoI"
    }
});

