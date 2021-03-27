import { SocialUser } from 'angularx-social-login';

export class Participant {
  id: number;
  phoneNumber: string;
  profilePhotoUrl: string;
  alias: string;
  user?: SocialUser;
}
