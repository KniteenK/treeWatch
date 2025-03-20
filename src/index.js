import app from './app.js' ;
import { configDotenv } from 'dotenv';

configDotenv();
const port = process.env.PORT || 5001 ;

app.get('/', (req, res) => {
    res.send('Hello World!') ;
})

app.listen(port , () => {
    console.log(`Server is running on port http://localhost:${port}`) ;
})