import { DataTypes } from "sequelize";

const Model = (evdb) => {
    return evdb.define("model", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        makeID: DataTypes.INTEGER
    });
};

export default Model;