import fs from "fs";
import { createClient } from "@deepgram/sdk";

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;
const deepgram = createClient(DEEPGRAM_API_KEY);

export class DeepgramRepository {
  async transcribeAudioFile(filePath: string) {
    const buffer = fs.readFileSync(filePath);
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      buffer,
      {
        model: "general",
        language: "pt",
        tier: "base",
        topics: true,
        intents: true,
        detect_entities: true,
        sentiment: true,
      }
    );
    return { result, error };
  }
}
