'use client';

import { useRouter } from 'next/navigation';

interface LogoutModalProps {
  onClose: () => void;
}

export default function LogoutModal({ onClose }: LogoutModalProps) {
  const router = useRouter();

  const handleLogout = () => {
    // localStorage.clear(), session 종료 등 logout
    router.push('/'); // 홈으로 이동
  };

  return (
    <div className="bg-accent-dark-tp fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-01 grid h-51.5 w-67 items-center border-2 p-6 shadow-md"
      >
        <div>
          <p className="text-caption-01 mb-7 justify-self-center">Promesa FE 김서연</p>
          <button
            onClick={handleLogout}
            className="text-caption-01 mx-auto block h-11.5 w-38.5 rounded-full border-2 border-black px-4 py-2 transition hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
