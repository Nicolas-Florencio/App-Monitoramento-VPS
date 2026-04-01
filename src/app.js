const express = require("express");
const routes = require("./routes/serverRoutes");
const checkServer = require("./utils/checkServer");
const { monitor } = require("./controllers/serverController");

const app = express();
app.use(express.json());

app.use("/", routes);

//verifica os servidores a cada 5s
setInterval(() => {
    monitor.verificarTodos(checkServer);
}, 5000);

//incia a api
app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000");
});