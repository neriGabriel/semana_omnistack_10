MÉTODOS HTTP: GET, POST, PUT, DELETE

TIPOS DE PARAMETROS:
query params: req.query  (Filtros, ordenação, paginação, ...) -> params no postman
route params: req.params (Identificar recurso na alteração ou remoção) -> url no postman
body: req.body (dados para criação ou alteração de registro)

app.get('/', (request, response) => {
    return response.json({"mensagem":"Olá"});
});

app.get('/users', (request, response) => {
    return response.json(request.query);
});

app.delete('/users/:id', (request, response) => {
    return response.json(request.params);
});

app.post('/users', (request, response) => {
    return response.json(request.body);
});