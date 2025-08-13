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

  async deleteTranscription(req: Request, res: Response) {
    const transcriptionId = req.params.id;
    if (!transcriptionId) {
      return res.status(400).json({ error: "Transcription ID is required" });
    }
    await this.transcribeService.deleteTranscription(+transcriptionId);
    return res
      .status(200)
      .json({ message: "Transcription deleted successfully" });
  }
}
