import { IPhotosService } from '../abstract/IPhotosService';
import { endpoint } from '../apiEndpoint';
import { Photos } from '../models/Photos';

export class PhotosService implements IPhotosService {
  public getPhotos(offset: number, count: number): Promise<Photos> {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then(res => {
          resolve((res as unknown) as Photos);
        })
        .catch(error => reject(error));
    });
  }
}
