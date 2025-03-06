import {DataType} from "sequelize";
import db from "../config/Database";


const UserAsset = db.define("UserAsset", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    assetname: {
        type: DataType.STRING,
        unique: true,
    },
    assetprice: {
        type: DataType.INTEGER,
        allowNull: false
    },
});

export default User;