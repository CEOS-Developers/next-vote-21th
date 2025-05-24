import AccountPrompt from '@/components/features/auth/AccountPrompt';
import CustomInput from '@/components/features/auth/CustomInput';
import SubmitButton from '@/components/common/SubmitButton';
import VerifyButton from '@/components/features/auth/VerifyButton';

export default function SignupPage() {
  return (
    <div className="w-100 h-fit">
      <h1 className="en-text text-5xl font-normal leading-1.2 mb-8">
        Create account
      </h1>

      <form className="w-full h-fit flex flex-col gap-6">
        <div className="w-full h-fit flex flex-col gap-5">
          <div className="w-full h-fit relative">
            <CustomInput
              type="email"
              placeholder="Email"
              isVerifyContained={true}
            />
            <VerifyButton />
          </div>
          <CustomInput type="password" placeholder="Password" />
        </div>
        <SubmitButton buttonText="Get Started" />
      </form>

      <AccountPrompt
        prompt="이미 회원이신가요?"
        linkText="로그인"
        route="/auth/login"
      />
    </div>
  );
}
