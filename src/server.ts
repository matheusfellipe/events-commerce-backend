import { app } from "./app";
import { AppDataSource } from "./db";

const PORT = 3000;


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