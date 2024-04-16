import mongoose from "mongoose";
export class ConnectDatabase {
  static async connect() {
    const DB_URL =
      "mongodb+srv://moonie:Tr%40ng2301@moonie.yxbxu8l.mongodb.net/todo";

    await mongoose
      .connect(DB_URL)

      .then(() => console.log("DB Connected!"))

      .catch((error) => console.log("DB connection error:", error.message));
  }
}
