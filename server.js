import express from "express";
import { PORT } from "./config/config.js";
import router from "./router/student_router.js";
import errorHandler from "./middleware/errorhandler.js";

const app = express()
// middleware ko enable 
app.use(express.json());



app.use('/student', router)


// use middleware
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
