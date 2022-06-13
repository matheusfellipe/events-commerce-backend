import { app } from "./app";
import { AppDataSource } from "./db";

const PORT = 3000;
// const server = app.listen(PORT,()=> console.log(`App is listening on port ${PORT}`));

async function main(){
    try{
        await AppDataSource.initialize();
        app.listen(PORT);
        console.log(`App is listening on port ${PORT}`);
    } catch(error){
        console.log(error)
    }
}

main();