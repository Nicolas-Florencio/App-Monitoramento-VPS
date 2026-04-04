class Server {
    constructor(id, nome, ip, url) {
        console.log("CONSTRUTOR CHAMADO COM:", { id, nome, ip, url });
        this.id = id;
        this.nome = nome;

        this.ip = ip;
        this.url = url;

        //this.tipo = "ping";
        this.status = "unknown";
        this.falhas = 0;
        this.pingLatencia = null;
        this.httpLatencia = null;
    }

    update(serverStatus) {
        this.pingLatencia = serverStatus.ping?.latencia ?? null;
        this.httpLatencia = serverStatus.http?.latencia ?? null;

        const pingOk = serverStatus.ping?.status ?? false;
        const httpOk = serverStatus.http?.status ?? false;

        if (!pingOk && !httpOk) {
            this.status = "offline";
            this.falhas++;
            return;
        }

        if (serverStatus.http && !httpOk) {
            this.falhas++;
            this.status = "site caiu";
            return;
        }

        this.falhas = 0;
        this.status = "online";
    }
}

module.exports = Server;
