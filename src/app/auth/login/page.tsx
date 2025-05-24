import CustomInput from '@/components/common/auth/CustomInput';

export default function LoginPage() {
  return (
    <div>
      <h1 className="en-text text-5xl font-normal mb-12">
        Welcome to
        <br />
        CEOS Vote Service
      </h1>

      <form className="w-full h-fit">
        <div className="w-full h-fit flex flex-col gap-6">
          <CustomInput type="email" placeholder="Email" />
          <CustomInput type="password" placeholder="Password" />
        </div>
      </form>
    </div>
  );
}
