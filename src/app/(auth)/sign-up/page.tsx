'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import Back from '@/components/common/back';
import Button from '@/components/features/auth/button';
import InputForm from '@/components/features/auth/input-form';
import ToggleGroup from '@/components/features/auth/toggle-group';
import { PART_LABELS, TEAM_LABELS } from '@/lib/constants/member-data';
import { signup } from '@/services/api/auth';
import { SignUpInput, signUpSchema } from '@/types/auth.dto';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      part: 'FE',
      team: '프로메사',
    },
  });

  const router = useRouter();

  const onSubmit = async (data: SignUpInput) => {
    await signup(data);
    router.push('/login');
  };

  return (
    <div className="flex h-full flex-col px-10">
      <div className="mt-8 mb-6 flex items-center">
        <Back href="/" />
        <h1 className="text-headline-03 text-grayscale-00-black mx-auto">Sign Up</h1>
      </div>
      <div className="flex flex-col gap-4">
        <InputForm label="Name" name="name" register={register} error={errors.name} />
        <InputForm label="ID" name="id" register={register} error={errors.id} />
        <InputForm label="Password" name="password" type="password" register={register} error={errors.password} />
        <InputForm
          label="Password Confirm"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword}
        />
        <InputForm label="Email" name="email" register={register} error={errors.email} />
        <div className="flex gap-10">
          <ToggleGroup label="Part" name="part" options={[...PART_LABELS]} control={control} error={errors.part} />
          <ToggleGroup label="Team" name="team" options={[...TEAM_LABELS]} control={control} error={errors.team} />
        </div>
      </div>
      <div className="absolute inset-x-10 top-5/6">
        <Button text="Sign Up" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
