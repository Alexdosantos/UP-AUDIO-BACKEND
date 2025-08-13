import { Router } from "express";
import TranscribeModule from "@app/module/TranscribeModule";
import multer from "multer";
import { asyncWrapper } from "src/middlewares/asyncWrapper";

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
  asyncWrapper(transcribeController.transcribeAudioFile.bind(transcribeController))
);
router.get(
  "/all",
  asyncWrapper(transcribeController.getAllTranscriptions.bind(transcribeController))
);
router.delete(
  "/delete/:id",
  asyncWrapper(transcribeController.deleteTranscription.bind(transcribeController))
);
router.get(
  "/find/:id",
  asyncWrapper(transcribeController.getTranscriptionById.bind(transcribeController))
);

export default router;
