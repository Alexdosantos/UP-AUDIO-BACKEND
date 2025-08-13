import { DeepgramRepository } from "@app/repositories/deepgramRepository";
import { TranscriptionRepository } from "@app/repositories/transcriptionRepository";

export class TranscribeService {
  constructor(
    private deepgramRepository: DeepgramRepository,
    private transcriptionRepository: TranscriptionRepository
  ) {}
  async transcribeAudioFile(
    filePath: string
  ): Promise<{ message: string; status: number } | void> {
    const { result, error } = await this.deepgramRepository.transcribeAudioFile(
      filePath
    );
    if (error) {
      return { message: "Error transcribing audio", status: 500 };
    }
    await this.transcriptionRepository.saveTranscription({
      transcription:
        result?.results?.channels[0]?.alternatives[0]?.transcript || "",
    });
    return { message: "Transcription completed", status: 200 };
  }

  async getAllTranscriptions() {
    return await this.transcriptionRepository.getAllTranscriptions();
  }

  async deleteTranscription(transcriptionId: number) {
    return await this.transcriptionRepository.deleteTranscription(
      transcriptionId
    );
  }
}
