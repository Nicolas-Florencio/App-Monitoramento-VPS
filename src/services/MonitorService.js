const Server = require("../models/Server");

class MonitorService {
    constructor() {
        this.servidores = [];
        this.nextId = 1;
    }

    addServidor(nomeSite, host) {
        const link = new Server(this.nextId++, nomeSite, host);
        link.status = "unreachable";

        this.servidores.push(link);
        return link;
    }

    getServidores() {
        return this.servidores;
    }

    async verificarTodos(verificarServer) {
        await Promise.all(
            this.servidores.map(async (servidor) => {
                const result = await verificarServer(servidor.host);

                servidor.status = result.status;
                servidor.latencia = result.latencia;
                console.log(servidor);
                
                servidor.update(result);
            })
        );
    }
}

module.exports = MonitorService;