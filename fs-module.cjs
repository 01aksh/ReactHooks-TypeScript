const fs = require("node:fs");

const fss = require("node:fs/promises");

const readStream = fs.createReadStream("./note.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
const writeStream = fs.WriteStream("./outputOfWriteStream.txt");

//Yes, you can definitely limit the size of each buffer chunk the stream reads
//  by using the highWaterMark option in fs.createReadStream. By default, it reads data in chunks of 64 KB (for files),
//  but you can set this to any size (in bytes) according to your needs.

readStream.on("data", (chunk) => {
  console.log("Chunk Data -", chunk);
});

// Handle errors on the readable stream
readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});

// Handle errors on the writable stream
writeStream.on("error", (err) => {
  console.error("Error writing file:", err);
});

// Pipe with error handling (the above will catch pipe errors too)
readStream.pipe(writeStream);
writeStream.on("finish", () => {
  console.log("File copied successfully using streams!");
});

// fs.writeFile(
//   "./note.txt",
//   "Hello Good Morning - Akshay",
//   { flag: "a" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File Written!");
//     }
//   }
// );

// async function WriteToFile() {
//   try {
//     await fss.writeFile(
//       "./proNotye.txt",
//       " This is Promises based Written File and also can append data into file",
//       {
//         flag: "a",
//       }
//     );
//     console.log("Content Appended in Promise Based File");
//   } catch (error) {
//     console.log(error, "Error in Writting File");
//   }
// }

// WriteToFile();
