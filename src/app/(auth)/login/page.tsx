'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Back from '@/components/common/back';
import Button from '@/components/features/auth/button';
import InputForm from '@/components/features/auth/input-form';
import { login } from '@/services/api/auth';
import { LoginInput, loginSchema } from '@/types/auth.dto';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] }); // force user cache refresh
      router.push('/');
    },
  });

  const onSubmit = (data: LoginInput) => mutation.mutate(data);

  return (
    <div className="flex h-full flex-col px-10">
      <div className="mt-8 mb-15 flex items-center">
        <Back href="/" />
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
