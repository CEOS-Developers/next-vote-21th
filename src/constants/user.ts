import { Part } from "./part.enum";
import { Team } from "./team.enum";

export interface User {
  loginId: string;
  password: string;
  email: string;
  part: Part;
  username: string;
  team: Team;
}
