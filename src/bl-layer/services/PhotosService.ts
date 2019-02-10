import { IPhotosService } from '../abstract/IPhotoService';
import { Photos } from '../../da-layer/models/Photos';
import { getApi } from '../../da-layer/getApi';

const itemsOnPage = 300;

export class PhotosService implements IPhotosService {
  api = getApi();

  public getPhotos(page: number, emotion?: string): Promise<Photos> {
    return this.api.photos.getPhotos(itemsOnPage * (page - 1), itemsOnPage, emotion);
  }

  public getPhotoUrl(url: string): string {
    const arr = url.split('.');
    const name = arr[arr.length - 2];
    const newName = name.substr(0, name.length - 1) + 'z'
    arr[arr.length - 2] = newName;
    return arr.join('.');
  }
}
