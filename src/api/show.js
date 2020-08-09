import axios from "axios";

export default axios.create({
    baseURL: "http://32face1ffc93.ngrok.io",//"http://localhost:3090",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdm9uZGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZW5oYSIsImlhdCI6MTU5Njk0MTA3NSwiZXhwIjoxNTk2OTU5MDc1fQ.5hv287jFI0jwFRMwxjD-AfEkTPwg_Xs04bEfBa2_-qc"
    }
});

