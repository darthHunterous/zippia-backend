exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let url = req.params.url;
    res.status(201).send(`Requisição recebida com sucesso! ${url}`);
};

exports.delete = (req, res, next) => {
    let url = req.params.url;
    res.status(200).send(`Requisição recebida com sucesso! ${url}`);
};