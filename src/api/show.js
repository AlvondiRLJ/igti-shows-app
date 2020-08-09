import axios from "axios";

export default axios.create({
    baseURL: "http://7712edfeadd1.ngrok.io",//"http://localhost:3090",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdm9uZGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZW5oYSIsImlhdCI6MTU5Njk5NzE2OCwiZXhwIjoxNTk3MDE1MTY4fQ.5lrJ0iLQia43YJqIVLn-otQBetX-F2v2sxOV7Wm24J0"
    }
});

