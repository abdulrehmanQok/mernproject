import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: "dffxhskrn",
	api_key:"494391752668847",
	api_secret:"IeF55KfcGMGehbMOt8f0WEGPW9U",
});

export default cloudinary;
