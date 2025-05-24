import { Part } from "./part.enum";
import { Team } from "./team.enum";

export const TeamLabel: Record<Team, string> = {
  [Team.DEARDREAM]: "이어드림",
  [Team.INFLUEE]: "인플루이",
  [Team.POPUPCYCLE]: "팝업사이클",
  [Team.PROMETHA]: "프로메타",
  [Team.HONEYHOME]: "허니홈",
};

export const PartLabel: Record<Part, string> = {
  [Part.FRONTEND]: "프론트",
  [Part.BACKEND]: "백엔드",
  [Part.NONE]: "기타",
};
