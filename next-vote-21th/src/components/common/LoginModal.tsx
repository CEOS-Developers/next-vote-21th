interface LoginModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const LoginModal = ({ onClose, onConfirm }: LoginModalProps) => {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="h-[280px] w-[320px] overflow-hidden rounded-3xl bg-white md:h-[320px] md:w-[400px]">
        <div className="text-heading1 flex h-[217px] w-full flex-col items-center justify-center md:h-[257px]">
          <div>로그인이 필요한 서비스입니다.</div>
          <div>로그인 하시겠습니까?</div>
        </div>

        <div className="text-heading2 h-[63px] w-full items-center justify-end">
          <button
            className="bg-green hover:bg-green-dark h-full w-1/2 cursor-pointer"
            onClick={onClose}
          >
            아니오
          </button>
          <button
            className="h-full w-1/2 cursor-pointer bg-gray-300 hover:bg-gray-700"
            onClick={onConfirm}
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
