import AccountPrompt from '@/components/common/auth/AccountPrompt';
import CustomInput from '@/components/common/auth/CustomInput';
import SubmitButton from '@/components/common/auth/SubmitButton';

export default function LoginPage() {
  return (
    <div className="max-w-110">
      <h1 className="en-text text-5xl font-normal leading-1.2 mb-12">
        Welcome to <br />
        CEOS Vote Service
      </h1>

      <form className="w-full h-fit flex flex-col gap-6">
        <div className="w-full h-fit flex flex-col gap-5">
          <CustomInput type="email" placeholder="Email" />
          <CustomInput type="password" placeholder="Password" />
        </div>
        <SubmitButton buttonText="Login" />
      </form>

      <AccountPrompt prompt="계정이 없으신가요?" route="/auth/signup" />
    </div>
  );
}
