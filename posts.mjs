import express from "express"
import userRouter from "./routes/posts.mjs"

const app = express()
app.use(express.json())

app.use("/posts", userRouter)

app.listen(3000, () => {
    console.log("서버 실행 중...")
})