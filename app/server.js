import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 3001
const CLIENT_PORT = process.env.CLIENT_PORT || 3000


const corsOptions = {
    origin: [`http://localhost:${CLIENT_PORT}`],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use('/', express.static('./client/build'))

app.get('/api/v1/trips', (req, res) => {
    let tripsData =
        [
            { name: 'Trip 1', price: 1000, currency: 'EUR' },
            { name: 'Trip 2', price: 1000, currency: 'USD' },
            { name: 'Trip 3', price: 3000, currency: 'EUR' }
        ]
    res.json(tripsData)
})
app.listen(PORT, () => {
    console.log(`trips app listening at http://localhost:${PORT}`)
})