import { Address } from './address.model';
import { User } from './user.model';

export class Observer {
  id: number;
  phoneNumber: string;
  profilePhotoUrl: string;
  role: string;
  about: string;
  birthdate: Date;
  schooling: string;
  institution: string;
  address: Address;
  user?: User;
}
