import { Button, Flex, Spacer } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';

import { InputRow, PlusButton } from '.';
import { WRITE_PAGE_KEY_LOCALSTORAGE } from '../../../constants';
import { ClipboardContentItem, writeClipboard } from '../../../lib/clipboard';
import {
  readLocalStorage,
  writeLocalStorage,
} from '../../../lib/local-storage';
import { useErrorToast, useSuccessToast } from '../../../providers';

interface FormResults {
  items: ClipboardContentItem[];
}

export const Form: FC = () => {
  let defaultValues = readLocalStorage<FormResults>(
    WRITE_PAGE_KEY_LOCALSTORAGE,
  );
  if (defaultValues === undefined) {
    defaultValues = {
      items: [
        {
          type: 'text/plain',
          content: '',
        },
      ],
    };
  }

  const formMethods = useForm<FormResults>({ defaultValues });

  const formResults = formMethods.watch();
  useEffect(() => {
    writeLocalStorage<FormResults>(WRITE_PAGE_KEY_LOCALSTORAGE, formResults);
  }, [formResults]);

  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control: formMethods.control,
  });

  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  const onSubmit: SubmitHandler<FormResults> = data => {
    writeClipboard(data.items)
      .then(() =>
        successToast({
          title: 'Success',
          description: 'Data has been written to clipboard.',
        }),
      )
      .catch((e: Error) =>
        errorToast({
          title: 'Error while writing to clipboard',
          description: e.message,
        }),
      );
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <>
            <InputRow
              key={item.id}
              index={index}
              onRemove={() => {
                remove(index);
              }}
            />
            <Spacer h="16px" />
          </>
        ))}
        <Flex w="100%" justifyContent="end" gap="12px">
          <PlusButton
            onClick={() => {
              append({
                type: '',
                content: '',
              });
            }}
          />
          <Button type="submit" colorScheme="blue">
            Write
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
};
