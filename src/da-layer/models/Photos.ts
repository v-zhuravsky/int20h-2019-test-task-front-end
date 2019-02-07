import { UniqueId } from "./UniqueId";

export interface Photo {
  url: string;
  emotionId: UniqueId;
  photoId: UniqueId;
}

export type Photos = Photo[];
