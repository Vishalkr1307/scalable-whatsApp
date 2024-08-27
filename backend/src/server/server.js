const app = require("..//index");
require("dotenv").config();
const cluster = require("cluster");
const cpPlus = require("os").cpus().length;
const port = process.env.PORT || 8000;


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (var i = 0; i < cpPlus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}


