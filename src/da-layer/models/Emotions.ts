import { UniqueId } from "./UniqueId";

export interface Emotion {
  emotionId: UniqueId;
  emotionName: string;
}

export type Emotions = Emotion[];
