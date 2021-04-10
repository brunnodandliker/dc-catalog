import { AxiosResponse } from 'axios';
import IHeroProps from '../interfaces/IHeroProps';
import api from './api';

export const getAllHeroes = ():Promise<AxiosResponse<IHeroProps[]>> => api.get<IHeroProps[]>('/all.json');
