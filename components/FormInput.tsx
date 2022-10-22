import React, { ChangeEvent, FormEvent, ReactElement } from "react";

type Props = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({placeholder, onChange}: Props): ReactElement {
  return (
    <input
      className="rounded-md border border-black text-black px-2 py-3 my-4 block w-full"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
