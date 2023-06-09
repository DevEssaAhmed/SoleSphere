import express, { Request, Response } from 'express';
import { products } from './data';

const app = express();

app.get('/api/v1/products', (req: Request, res: Response) => {
  res.json(products);
});


const PORT = 5000 

app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`)
})