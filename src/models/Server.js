class Server {
    constructor(id, nome, host) {
        this.id = id;
        this.nome = nome;
        this.host = host;
        this.status = "unknown";
        this.falhas = 0;
        this.ultLatencia = null;
    }

    update(result) {
        this.ultLatencia = result.latencia;

        if (result.status === "offline") {
            this.falhas++;
        } else {
            this.falhas = 0;
        }

        this.status = this.falhas >= 3 ? "offline" : "online";
    }
}

module.exports = Server;