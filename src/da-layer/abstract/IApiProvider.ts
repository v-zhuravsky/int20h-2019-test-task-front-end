import { IEmotionsService } from './IEmotionsService';
import { IPhotosService } from './IPhotosService';

export interface IApiProvider {
  photos: IPhotosService;
  emotions: IEmotionsService;
}
