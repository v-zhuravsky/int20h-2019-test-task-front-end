import { Photos } from '../models/Photos';

export interface IPhotosService {
  /**
   * Gets photos from server
   *
   * @param offset - previous count amount to let server know what set of photos to load
   * @param count - count of photos to load
   * @param emotion - optional filter of emotion to load photo with
   */
  getPhotos(
    offset: number,
    count: number,
    emotion?: string,
    emotionValue?: number,
    emotionComparison?: string
  ): Promise<Photos>;
}
