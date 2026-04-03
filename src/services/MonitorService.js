require("../utils/checkServer");
const Server = require("../models/Server");

class MonitorService {
    constructor() {
        this.servidores = [];
        this.nextId = 1;
    }

    addServidor(nomeSite, ip, url) {
        const link = new Server(this.nextId++, nomeSite, ip, url);
        link.status = "unreachable";

        this.servidores.push(link);
        return link;
    }

    getServidores() {
        console.log(this.servidores);
        return this.servidores;
    }

    async verificarTodos(verificarServer) {
        await Promise.all(
            this.servidores.map(async (servidor) => {
                console.log(`objeto servidor: ${servidor.nome} (${servidor.ip}) e ${servidor.pingLatencia}ms objeto todo ${JSON.stringify(servidor)}`);
                const result = await verificarServer(servidor);
                
                servidor.update(result);
                console.log({
                    nome: servidor.nome,
                    status: servidor.status,
                    ip: servidor.ip,
                    url: servidor.url,
                    ping: servidor.pingLatencia,
                    http: servidor.httpLatencia
                });
            })
        );
    }
}

module.exports = MonitorService;