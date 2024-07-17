import express from 'express';
import { getListing } from '../controllers/listing.controller.js';

const listingRouter = express.Router();

listingRouter.get('/get', getListing)

export default listingRouter;