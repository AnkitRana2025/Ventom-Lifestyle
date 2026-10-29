import express from "express"
import cookieParser from "cookie-parser"
import AuthRouter from "../router/auth.router.js"

export const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",AuthRouter)

