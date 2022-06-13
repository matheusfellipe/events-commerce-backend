import { AppDataSource } from "./data-source"
import { User } from "./models/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.cpf=12345678910;
    user.email="fulano@gamil.com";
 
    await AppDataSource.manager.save(user)
   

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
