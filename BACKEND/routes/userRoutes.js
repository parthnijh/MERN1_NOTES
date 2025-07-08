import express from "express"
import {createNote,getNotes} from "../controllers/userControllers.js"
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router();

router.get("/notes",protectRoute,getNotes)
router.post("/upload",protectRoute,createNote)

export default router