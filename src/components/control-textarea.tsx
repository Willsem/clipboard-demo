import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends TextareaProps {
  name: string;
  required: boolean;
}

export const ControlTextarea: FC<Props> = ({
  name,
  required,
  ...textareaProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => <Textarea {...textareaProps} {...field} />}
    />
  );
};
