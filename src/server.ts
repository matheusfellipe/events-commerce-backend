import { app } from "./app";

const PORT = 3000;

app.listen(PORT);

const server = app.listen(PORT,()=> console.log(`App is listening on port ${PORT}`));

process.on('SIGINT',()=>{
    server.close();
    console.log('finished app')
})