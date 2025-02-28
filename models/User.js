import {DataType} from "sequelize";
import db from "../config/Database";

const User = db.define("User", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataType.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataType.STRING,
        allowNull: false
    },
    username: {
        type: DataType.STRING,
        allowNull: false
    },
});

export default User;