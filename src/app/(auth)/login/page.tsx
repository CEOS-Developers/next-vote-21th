'use client';

import { useForm } from 'react-hook-form';
import Back from '@components/common/back';
import Button from '@components/features/auth/button';
import InputForm from '@components/features/auth/input-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@libs/auth';
import { LoginInput, loginSchema } from '@models/auth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const onSubmit = (data: LoginInput) => {
    const dummyToken = 'fake-jwt-token';

    console.log(data);

    localStorage.setItem('token', dummyToken);
    login(data.id);
    router.push('/');
  };

  return (
    <div className="flex h-full flex-col px-10">
      <div className="mt-8 mb-15 flex items-center">
        <Back />
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">Login</h1>
      </div>
      <div className="flex flex-col gap-4">
        <InputForm label="ID" name="id" register={register} error={errors.id} />
        <InputForm label="Password" name="password" type="password" register={register} error={errors.password} />
      </div>
      <div className="absolute inset-x-10 top-3/4">
        <Button text="Login" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
