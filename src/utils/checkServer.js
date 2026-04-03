const pingCheck = require("./pingCheck");
const httpCheck = require("./httpCheck");

async function checkServer(servidor) {
    const promises = [];
    console.log(`Iniciando verificações para: ${servidor.nome} (${servidor.ip}) e ${servidor.url ? servidor.url : "sem URL"}`);

    promises.push(pingCheck(servidor.ip)); //tenta ping

    if (servidor.url && servidor.url.startsWith("http")) { //tenta http
        promises.push(httpCheck(servidor.url));
    }
    else {
        promises.push(Promise.resolve(null));
    }

    const [pingResult, httpResult] = await Promise.all(promises);
    console.log(`Resultados para ${servidor.nome}: Ping - ${pingResult.upLink ? "Online" : "Offline"}, Latência - ${pingResult.latencia}ms; HTTP - ${httpResult ? (httpResult.upLink ? "Online" : "Offline") : "N/A"}, Latência - ${httpResult ? httpResult.latencia + "ms" : "N/A"}`);

    return {
        ping: pingResult,
        http: httpResult
    };
}

module.exports = checkServer;