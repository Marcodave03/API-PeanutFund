import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import sequelize from "./config/Database.js";

import User from "./models/User.js";
import UserAsset from "./models/UserAsset.js";
import AssetTransaction from "./models/AssetTransaction.js";
import Bot from "./models/Bot.js";
import Strategy from "./models/Strategy.js";
import Transaction from "./models/Transaction.js";
import Balance from "./models/Balance.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
// initializeSocketIO(server);

app.use(cors());
app.use(express.json());

const port = process.env.PORT;
if (!port) {
  console.error("Port is not defined in the environment variables");
  process.exit(1);
}

(async () => {
  try {
    await User.sync();
    await UserAsset.sync();
    await AssetTransaction.sync();
    await Bot.sync();
    await Strategy.sync();
    await Transaction.sync();
    await Balance.sync();
    // await Profiles.sync();

    // Run seeder
    // await runSeeders({
    //   bulkInsert: async (table, data, options) => {
    //     const queryInterface = sequelize.getQueryInterface();
    //     await queryInterface.bulkInsert(table, data, options);
    //   },
    //   bulkDelete: async (table, query, options) => {
    //     const queryInterface = sequelize.getQueryInterface();
    //     await queryInterface.bulkDelete(table, query, options);
    //   }
    // });

    server.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error("Error starting server or seeding database:", error);
    process.exit(1);
  }
})();
