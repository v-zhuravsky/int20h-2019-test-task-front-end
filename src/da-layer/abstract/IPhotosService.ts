import { Photos } from '../models/Photos';

export interface IPhotosService {
  /**
   * Gets photos from server
   *
   * @param offset - previous count amount to let server know what set of photos to load
   * @param count - count of photos to load
   */
  getPhotos(offset: number, count: number): Promise<Photos>;
}
