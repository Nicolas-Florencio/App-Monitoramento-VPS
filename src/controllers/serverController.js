const MonitorService = require("../services/MonitorService");

const monitor = new MonitorService();

exports.addServidor = (req, res) => {
    const { nome, host } = req.body;

    const servidor = monitor.addServidor(nome, host);
    res.json(servidor);
};

exports.getServidores = (req, res) => {
    res.json(monitor.getServidores());
};

exports.monitor = monitor;