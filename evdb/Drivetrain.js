import { DataTypes } from "sequelize";

const Drivetrain = (evdb) => {
    return evdb.define("drivetrain", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
};

export default  Drivetrain;