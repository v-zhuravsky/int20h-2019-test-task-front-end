import { IPhotosService } from '../abstract/IPhotosService';
import { endpoint } from '../apiEndpoint';
import { Photos } from '../models/Photos';

export class PhotosService implements IPhotosService {
  public getPhotos(
    offset: number,
    count: number,
    emotion: string
  ): Promise<Photos> {
    return new Promise((resolve, reject) => {
      fetch(
        endpoint + `?offset=${offset}&count=${count}&emotion=${emotion}`
      )
        .then(res => {
          res.json().then(data => {
            resolve(data as Photos);
          });
        })
        .catch(error => reject(error));
    });
  }
}
