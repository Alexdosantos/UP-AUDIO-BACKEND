import { PrismaClient } from "generated/prisma";
import { TranscribeDto } from "@app/dtos/transcribeDto";
import { HttpError } from "src/utils/httpError";

export class TranscriptionRepository {
  constructor(private prisma: PrismaClient) {}
  async saveTranscription(transcriptionDto: TranscribeDto) {
    try {
      return await this.prisma.transcription.create({
        data: transcriptionDto,
      });
    } catch (error) {
      return { message: "Error saving transcription", status: 500 };
    }
  }

  async getAllTranscriptions() {
    return await this.prisma.transcription.findMany();
  }

  async findTranscriptionById(id: number) {
    const transcription = await this.prisma.transcription.findUnique({
      where: { id },
    });
    if (!transcription) {
      throw new HttpError("Transcription not found", 404);
    }
    return transcription;
  }

  async deleteTranscription(id: number) {
    const transcription = await this.prisma.transcription.findUnique({
      where: { id },
    });
    if (!transcription) {
      throw new HttpError("Transcription not found by id", 404);
    }
    return await this.prisma.transcription.delete({
      where: { id },
    });
  }
}
