import { IApiProvider } from '../abstract/IApiProvider';
import { IEmotionsService } from '../abstract/IEmotionsService';
import { IPhotosService } from '../abstract/IPhotosService';
import { EmotionsService } from '../services/EmotionsService';
import { PhotosService } from '../services/PhotosService';

export class ApiProvider implements IApiProvider {
  public photos: IPhotosService = new PhotosService();
  public emotions: IEmotionsService = new EmotionsService();
}
