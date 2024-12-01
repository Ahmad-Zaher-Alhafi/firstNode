const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "." + (req.url === "/" ? "/index.html" : req.url + ".html");


  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile("./404.html", (err, page) => {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html");
        res.end(page);
      });
    } else {
      res.statusCode = 200;
      res.setHeader("content-type", "text/html");
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server runnig at http://localhost:${PORT}/`);
});
