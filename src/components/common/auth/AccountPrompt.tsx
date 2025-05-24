import Link from 'next/link';

type AccountPromptProps = {
  prompt: string;
  route: string;
};

const AccountPrompt = ({ prompt, route }: AccountPromptProps) => {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-2 mt-6">
      <span>{prompt}</span>
      <Link href={route} className="font-semibold">
        회원가입
      </Link>
    </div>
  );
};

export default AccountPrompt;
