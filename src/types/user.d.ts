import { PART_LABELS, TEAM_LABELS } from '@/lib/constants/member-data';

export interface User {
  id: string;
  name: string;
  email: string;
  part: (typeof PART_LABELS)[number];
  team: (typeof TEAM_LABELS)[number];
}
