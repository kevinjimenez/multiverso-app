import { Location } from '../../locations/interfaces/location.interface';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Pick<Location, 'name' | 'url'>;
  location: Pick<Location, 'name' | 'url'>;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
