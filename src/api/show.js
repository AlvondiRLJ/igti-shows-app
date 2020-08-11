import axios from "axios";

export default axios.create({
    baseURL: "http://8fd730d2ec83.ngrok.io",//"http://localhost:3090",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdm9uZGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZW5oYSIsImlhdCI6MTU5NzEwOTQ0NSwiZXhwIjoxNTk3MTI3NDQ1fQ.ge-YXqOGvnKz6o6XsCwcGTDqGp69xdVNxk6Hhbu-TAg"
    }
});

