import { TranscribeController } from "@app/controllers/transcribeController";
import { TranscribeService } from "@app/services/transcribeService";
import { DeepgramRepository } from "@app/repositories/deepgramRepository";
import { TranscriptionRepository } from "@app/repositories/transcriptionRepository";
import prisma from "../../prismaClient/client";


class TranscribeModule {
    static instance(){
        const deepgramRepository = new DeepgramRepository();
        const transcriptionRepository = new TranscriptionRepository(prisma);
        const transcribeService = new TranscribeService(deepgramRepository, transcriptionRepository);
        const transcribeController = new TranscribeController(transcribeService);
        return { transcribeController };
    }

}
export default TranscribeModule;