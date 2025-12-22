
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../db/Cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "pastebox",
    resource_type: "auto", // accepts images, pdf, zip, etc
  },
});

export const upload = multer({ storage });
