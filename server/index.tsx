import express from "express";
import path from "path";
import ReactDOMServer from "react-dom/server";
import React from "react";
import type { Request, Response } from "express";
import App from "../src/containers/App";

const app = express();
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "..", "public")));
app.get("/", (req: Request, res: Response) => {
  const component = ReactDOMServer.renderToString(<App />);
  const html = `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>SSR</title>
        </head>
        <body>
            <div id="root">${component}</div>
            <script src="./static/bundle.js"></script>
        </body>
    </html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
