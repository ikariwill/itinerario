const server = require("./server");

server.listen(process.env.PORT || 5000);

console.log(`Server started at ${process.env.PORT || 5000}`);
