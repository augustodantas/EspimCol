import { SocialUser } from 'angularx-social-login';

import { Address } from './address.model';

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
  user?: SocialUser;
}
