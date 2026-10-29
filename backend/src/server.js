import { app } from "./app/app.js";
import { connectDB } from "./config/db.js";

await connectDB();

app.listen(3000, ()=>{
  console.log("server is runnig on port no. 3000")
})