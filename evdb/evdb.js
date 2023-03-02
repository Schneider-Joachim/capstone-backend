// this page tests and connects to the ps database/beekeeper
import Sequelize from "sequelize";
import MakeModel from "./Make.js";
import ModelModel from "./Model.js";
import DrivetrainModel from "./Drivetrain.js";
import DrivepowerModel from "./Drivepower.js";

// to connect posgresql db
const evdb = new Sequelize("postgres://worktime@localhost:5432/evdb");
const Make = MakeModel(evdb);
const Model = ModelModel(evdb);
const Drivetrain = DrivetrainModel(evdb);
const Drivepower = DrivepowerModel(evdb);

// to test db connection & table builds
const connectToEVDB = async () => {
    try {
        await evdb.authenticate();
        console.log("Connected to EVDB");

// testing successful, moved to global scope so the model can have access to the db
        // Make(evdb);
        // Model(evdb);
        // Drivetrain(evdb);
        // Drivepower(evdb);

        await evdb.sync(); 
    } catch (error) {
        console.error(error);
        console.error("NOPE");
    }
}

connectToEVDB(); 

export { evdb };