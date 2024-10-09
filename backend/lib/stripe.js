import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

export const stripe = new Stripe("sk_test_51PxpWI2NEBcCJ6P8dHonnIyRnlivnILL7CO79jTNw4RkVy0o5GLaRQBPPMyHIXYvJ0J3oUnb5EtyS6fhso7wpKe500MegUWDq2");
