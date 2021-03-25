import { SocialUser } from 'ngx-social-login';

export class Participant {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  profilePhotoUrl: string;
  alias: string;
  user?: SocialUser;
}
