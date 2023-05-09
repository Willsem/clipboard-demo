import { FC } from 'react';
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';

import { InputRow, SubmitButton } from '.';
import { ClipboardContentItem } from '../../../lib/clipboard';
import { PlusButton } from './plus-button';

interface FormResults {
  items: ClipboardContentItem[];
}

export const Form: FC = () => {
  const formMethods = useForm<FormResults>();
  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control: formMethods.control,
  });
  const onSubmit: SubmitHandler<FormResults> = data => console.log(data);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <InputRow
            key={item.id}
            index={index}
            onRemove={() => {
              remove(index);
            }}
          />
        ))}
        <PlusButton
          onClick={() => {
            append({
              type: '',
              content: '',
            });
          }}
        />
        <SubmitButton />
      </form>
    </FormProvider>
  );
};
