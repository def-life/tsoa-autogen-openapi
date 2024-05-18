// src/server.ts
import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);


// run this command to generate the autogen-client
// npx openapi-typescript-codegen -i ./server/build/swagger.json -o node-client
// make sure to be in root folder