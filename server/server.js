import express from "express";
import * as path from "path";
import { FetchPokemonAPI } from "./pokemonFetchApi.js";

const app = express();

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    app.use("/api/pokemon", FetchPokemonAPI());
    next();
  }
});


const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});