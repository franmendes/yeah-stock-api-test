import { createServer } from "./utils/createServer";

const app = createServer();

app.get("/", (request, response) => {
  return response.status(200).send("Hello World!");
});

app.listen(3333, () => {
  console.log("App started at port 3333!");
});
