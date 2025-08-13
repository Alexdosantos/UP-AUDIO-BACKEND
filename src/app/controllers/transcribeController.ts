import { TranscribeService } from "@app/services/transcribeService";
import { Request, Response } from "express";

export class TranscribeController {
  constructor(private transcribeService: TranscribeService) {}

  async transcribeAudioFile(req: Request, res: Response) {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "Nenhum arquivo enviado" });
    }

    await this.transcribeService.transcribeAudioFile(req.file.path);
    return res
      .status(200)
      .json({ message: "Transcription completed successfully" });
  }

  async getAllTranscriptions(req: Request, res: Response) {
    const transcriptions = await this.transcribeService.getAllTranscriptions();
    return res.status(200).json(transcriptions);
  }

  async getTranscriptionById(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const transcription = await this.transcribeService.findTranscriptionById(
      +id
    );
    return res.status(200).json(transcription);
  }

  async deleteTranscription(req: Request, res: Response) {
    const id =req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    await this.transcribeService.deleteTranscription(+id);
    return res
      .status(200)
      .json({ message: "Transcription deleted successfully" });
  }
}
