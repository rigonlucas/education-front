import {UserInterface} from "@/core/modules/auth/interfaces/UserInterface";

export interface AuthInterface {
  user: UserInterface | null,
  token: string | null
}
