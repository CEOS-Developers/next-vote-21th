// store/voteStore.ts
import { create } from 'zustand';

type VoteType = 'partleader' | 'demoday' | null;

interface VoteStore {
  voteType: VoteType;
  selectedFrontend: string | null;
  selectedBackend: string | null;
  selectedTeam: string | null;
  setVoteType: (type: VoteType) => void;
  selectFrontend: (id: string) => void;
  selectBackend: (id: string) => void;
  selectTeam: (id: string) => void;
  reset: () => void;
}

export const useVoteStore = create<VoteStore>((set) => ({
  voteType: null,
  selectedFrontend: null,
  selectedBackend: null,
  selectedTeam: null,

  setVoteType: (type) => set({ voteType: type }),
  selectFrontend: (id) => set({ selectedFrontend: id }),
  selectBackend: (id) => set({ selectedBackend: id }),
  selectTeam: (id) => set({ selectedTeam: id }),
  reset: () =>
    set({
      voteType: null,
      selectedFrontend: null,
      selectedBackend: null,
      selectedTeam: null,
    }),
}));
