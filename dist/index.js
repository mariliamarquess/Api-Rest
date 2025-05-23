"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = require("./server/database/knex");
const Server_1 = require("./server/Server");
const startServer = () => {
    Server_1.server.listen(process.env.PORT || 3333, () => {
        console.log(`Server is running on port ${process.env.PORT || 3333}`);
    });
};
if (process.env.IS_LOCALHOST !== 'true') {
    knex_1.Knex.migrate.latest()
        .then(() => {
        startServer();
    })
        .catch(console.log);
}
else {
    startServer();
}
