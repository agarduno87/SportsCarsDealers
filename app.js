const express = require('express');
const app = express();
const router = require('./routers/main');

app.use('/', router);


app.listen(3000, () => {
    console.log(`Gracias por usar este túnel. Deja tu cuota en el puerto 3000`);
});