import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js'

dotenv.config();


const app = express();
const PORT =  process.env.PORT || 8000;

//In a express application to enable cross origin resource sharing this below line is used
app.use(cors("*")); // use is the middleware function
app.use(express.json( { limit: "10mb"}));
app.use(express.urlencoded({extended: true}));


app.use("/api-v1", routes);

// Undefined routes will go here
app.use("*", (req, res) => {
    res.status(404).json({
        status: "404 not found",
        message: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})

