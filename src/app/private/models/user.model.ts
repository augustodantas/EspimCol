import { Role } from './role.model';

export class User {
  id: number;
  alias: string;
  email: string;
  name: string;
  photoUrl?: string;
  roles?: Role[];
  permissions?: Array<string>;
}
