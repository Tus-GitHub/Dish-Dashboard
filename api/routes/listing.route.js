import express from 'express';
import { getListing, toggleButton } from '../controllers/listing.controller.js';

const listingRouter = express.Router();

listingRouter.get('/get', getListing)
listingRouter.post('/toggle/:id', toggleButton)

export default listingRouter;