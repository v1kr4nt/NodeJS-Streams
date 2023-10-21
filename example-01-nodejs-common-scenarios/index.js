// 1 - terminal inputs

// const stdin = process.stdin
// .on("data", (msg) => console.log("terminal input was", msg));

//stdin --> readable stream

// const stdout = process.stdout.on("data", (msg) =>
//   console.log(msg.toString().toUpperCase())
// );

//stdout --> writable stream

// stdin.pipe(stdout);
//pipe --> working as a funnel

// 2
// node -e "const fs = require('fs'); const crypto = require('crypto'); const outStream = fs.createWriteStream('big.file'); outStream.write(crypto.randomBytes(1e9)); outStream.end();"  // ---> create a file with random bytes

import http from "http";
import { readFileSync, createReadStream } from "fs";
http
  .createServer((request, response) => {
    // const file = readFileSync("big.file");
    // response.write(file);
    // response.end();

    createReadStream("big.file").pipe(response);
  })
  .listen(3000)
  .on("listening", () => console.log("server is listening at 3000"));
