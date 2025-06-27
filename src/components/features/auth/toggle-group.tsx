'use client';

import { useState } from 'react';
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';

type ToggleGroupProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  options: string[];
  control: Control<T>;
  error?: FieldError;
};

export default function ToggleGroup<T extends FieldValues>({
  label,
  name,
  options,
  control,
  error,
}: ToggleGroupProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="text-caption-04 flex items-center gap-2">
        <label className="text-accent-brown">{label}</label>
        {error && <p className="text-[10px] text-red-500">{error.message}</p>}
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative z-10 flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-body-02 w-full text-center">{field.value}</p>
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`border-accent-brown ${open ? 'mt-[6px] rotate-135' : '-rotate-45'} h-3 w-3 cursor-pointer rounded-xs border-b-3 border-l-3`}
              />
            </div>
            {open && (
              <ul className="absolute top-full z-50 mt-[6px] w-full">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      field.onChange(option);
                      setOpen(false);
                    }}
                    className={`flex ${field.value === option ? 'bg-[#8b8674]' : 'bg-[#e1e1d7]'}`}
                  >
                    <p className="text-body-02 w-full cursor-pointer text-center">{option}</p>
                    <div className="h-3 w-3 rounded-xs border-b-3 border-l-3 opacity-1" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      />
      <hr className="bg-accent-brown h-[2px]" />
    </div>
  );
}
