import { Input, InputProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends InputProps {
  name: string;
  required: boolean;
}

export const ControlInput: FC<Props> = ({ name, required, ...inputProps }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => <Input {...inputProps} {...field} />}
    />
  );
};
