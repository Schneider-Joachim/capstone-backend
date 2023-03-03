// this page tests and connects to the ps database/beekeeper
import Sequelize from "sequelize";
import MakeModel from "./Make.js";
import ModelModel from "./Model.js";
import DrivetrainModel from "./Drivetrain.js";
// import DrivepowerModel from "./Drivepower.js";

let evdb; 
if (process.env.RDS_HOSTNAME) {
	console.log("Connecting to RDS", process.env.RDS_HOSTNAME);
	// if we're running on elasticbeanstalk, use elasticbeanstalk connection
	evdb = new Sequelize(`postgres://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`, {
		logging: false,
	})
} else {
	console.log("Connecting to local database");
	// if we're running locally, use the localhost connection
	evdb = new Sequelize("postgres://worktime@localhost:5432/evdb", {
		logging: false,
	});
}

// to connect posgresql db and models to db globally
// const evdb = new Sequelize("postgres://worktime@localhost:5432/evdb");
const Make = MakeModel(evdb);
const Model = ModelModel(evdb);
const Drivetrain = DrivetrainModel(evdb);
// const Drivepower = DrivepowerModel(evdb);

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

export { evdb, Make, Model, Drivetrain };