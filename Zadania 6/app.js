const http = require("http");
const student = require("./student");

const PORT = 3000;

function requestListener(request, response) {
  const id = 0;
  
  const FULLNAME = student.getStudentFullName();
  const STUDENT_ID = student.getStudentId();

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>About student</title></head>");
  response.write("<body>");
  response.write(`<p>My name is ${FULLNAME}. My student ID is ${STUDENT_ID}</p>`);
  response.write("</body>");
  response.write("</html>");
  response.end();
}

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});