// store/voteStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type VoteType = '파트장 투표' | '데모데이 투표' | null;

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

export const useVoteStore = create<VoteStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'vote-storage', // localStorage에 저장될 key 이름
    },
  ),
);
