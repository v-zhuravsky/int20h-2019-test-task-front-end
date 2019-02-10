import { Photos } from '../../da-layer/models/Photos';

export interface IPhotosService {
  getPhotos(page: number, emotion: string): Promise<Photos>;
  getPhotoUrl(photoUrl: string): string;
}
