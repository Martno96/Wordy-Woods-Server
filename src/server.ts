import "dotenv/config"
import express from "express"
import logger from "morgan"
import { router } from "./routes/router"

const app = express()

// Parse incoming JSON requests
app.use(express.json())

// Logging
app.use(logger("dev"))

// Register routes
app.use("/", router)

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" })
})

const server = app.listen(process.env.PORT || 3000, () => {
  const address = server.address() as { port: number }
  console.log(`Server running at http://localhost:${address.port}`)
})