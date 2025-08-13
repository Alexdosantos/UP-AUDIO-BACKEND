import { Router } from "express";
import TranscribeModule from "@app/module/TranscribeModule";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const router = Router();
const upload = multer({ storage });
const { transcribeController } = TranscribeModule.instance();

router.post(
  "/create",
  upload.single("audio"),
  transcribeController.transcribeAudioFile.bind(transcribeController)
);
router.get(
  "/all",
  transcribeController.getAllTranscriptions.bind(transcribeController)
);
router.delete(
  "/delete/:id",
  transcribeController.deleteTranscription.bind(transcribeController)
);

export default router;
