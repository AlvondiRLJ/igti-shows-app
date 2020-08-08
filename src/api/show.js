import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3090",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdm9uZGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZW5oYSIsImlhdCI6MTU5Njg4MzA0NywiZXhwIjoxNTk2OTAxMDQ3fQ.FOBbzXw5tw6c5ArSkUYY66XGhqxeqVxpQUgkjagKJbY"
    }
});

