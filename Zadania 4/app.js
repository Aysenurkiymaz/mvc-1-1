const http = require("http");
const student = require("./student");

const FULLNAME = student.getStudentFullName();
const STUDENT_ID = student.getStudentId();

const PORT = 3000;

function requestListener(request, response) {
    response.setHead("Content-Type", "text/html");
    response.end();
}

const server = http.createServer(requestListener);
  
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${FULLNAME}. My student ID is ${STUDENT_ID}`);
});