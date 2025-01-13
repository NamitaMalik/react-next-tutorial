import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "books.json");
  const readFileData = await readFile(jsonFile);
  const books = JSON.parse(readFileData).books;
  await delay(1000);

  switch (method) {
    case "GET":
      try {
        if (!books) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(books, null, 2));
          console.log("GET /api/books  status: 200");
        }
      } catch (e) {
        console.log("/api/books error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = req?.body;
        recordFromBody.id = Math.max(...books.map((h) => h.id)) + 1;
        const newbooksArray = [...books, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              books: newbooksArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/books status: 200`);
      } catch (e) {
        console.log("/api/books POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}