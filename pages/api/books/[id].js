import path from "path";
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const id = parseInt(req?.query?.id);
  const jsonFile = path.resolve("./", "books.json");
  const readFileData = await readFile(jsonFile);
  await delay(1000);
  const books = JSON.parse(readFileData).books;
  const book = books.find((rec) => rec.id === id);
  if (book) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(book);
  } else {
    res.status(404).send("book not found");
  }
  console.log(`GET /api/books/${id} status: 200`);
}