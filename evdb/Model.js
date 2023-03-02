import { DataTypes } from "sequelize";

const Model = (evdb) => {
    return evdb.define("model", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
};

export default Model;