import { Part } from "./part.enum";
import { Team } from "./team.enum";

export interface MemberData {
  name: string;
  part: Part;
}

export interface TeamData {
  code: Team;
  members: MemberData[];
}

export const TEAM: TeamData[] = [
  {
    code: Team.DEARDREAM,
    members: [
      { name: "김영서", part: Part.FRONTEND },
      { name: "이주희", part: Part.FRONTEND },
      { name: "한혜수", part: Part.BACKEND },
      { name: "오지현", part: Part.BACKEND },
    ],
  },
  {
    code: Team.INFLUEE,
    members: [
      { name: "최서연", part: Part.FRONTEND },
      { name: "한서정", part: Part.FRONTEND },
      { name: "박서연", part: Part.BACKEND },
      { name: "박채연", part: Part.BACKEND },
    ],
  },
  {
    code: Team.POPUPCYCLE,
    members: [
      { name: "김철흥", part: Part.FRONTEND },
      { name: "송아영", part: Part.FRONTEND },
      { name: "김준형", part: Part.BACKEND },
      { name: "임도현", part: Part.BACKEND },
    ],
  },
  {
    code: Team.PROMETHA,
    members: [
      { name: "권동욱", part: Part.FRONTEND },
      { name: "김서연", part: Part.FRONTEND },
      { name: "박정하", part: Part.BACKEND },
      { name: "서채연", part: Part.BACKEND },
    ],
  },
  {
    code: Team.HONEYHOME,
    members: [
      { name: "신수진", part: Part.FRONTEND },
      { name: "원채영", part: Part.FRONTEND },
      { name: "이석원", part: Part.BACKEND },
      { name: "최근호", part: Part.BACKEND },
    ],
  },
];
