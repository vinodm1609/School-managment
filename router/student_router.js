import express from "express"
import studentRegister from "../controller/auth/student's.js";


const router = express.Router()

router.post('/register', studentRegister.singUp)


export default router;