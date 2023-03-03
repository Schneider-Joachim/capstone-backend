// ORM model
// how to show FK in PK tables through the ORM/ beekeeper
import { DataTypes } from "sequelize";

const Make = (evdb) => {
    return evdb.define("make", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    });
};

export default Make;