import {
  Box,
  Button,
  Grid,
  GridItem,
  Spacer,
  Textarea,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { ControlTextarea } from '../../components';
import { TEXT_PAGE_KEY_LOCALSTORAGE } from '../../constants';
import {
  readTextClipboard,
  writeTextClipboard,
} from '../../lib/clipboard-text';
import { readLocalStorage, writeLocalStorage } from '../../lib/local-storage';
import { useErrorToast, useSuccessToast } from '../../providers';

interface FormResults {
  input: string;
}

interface LocalStorageContent {
  text: string;
  form: FormResults;
}

export const TextPage: FC = () => {
  let defaultValues = readLocalStorage<LocalStorageContent>(
    TEXT_PAGE_KEY_LOCALSTORAGE,
  );
  if (defaultValues === undefined) {
    defaultValues = {
      text: '',
      form: {
        input: '',
      },
    };
  }

  const errorToast = useErrorToast();
  const successToast = useSuccessToast();

  const [clipboardText, setClipboardText] = useState(defaultValues.text);

  const formMethods = useForm<FormResults>({
    defaultValues: defaultValues.form,
  });
  const formResults = formMethods.watch();

  useEffect(() => {
    writeLocalStorage(TEXT_PAGE_KEY_LOCALSTORAGE, {
      text: clipboardText,
      form: formResults,
    });
  }, [clipboardText, formResults]);

  const clickInspectClipboard = () =>
    readTextClipboard()
      .then(text => setClipboardText(text))
      .catch((e: Error) => {
        errorToast({
          title: 'Error while reading the clipboard',
          description: e.message,
        });
      });

  const onSubmit: SubmitHandler<FormResults> = data => {
    writeTextClipboard(data.input)
      .then(() =>
        successToast({
          title: 'Success',
          description: 'Text has been written to clipboard.',
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
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap="16px">
        <GridItem>
          <Button onClick={clickInspectClipboard} colorScheme="blue">
            Inspect text from clipboard
          </Button>
          <Spacer h="12px" />
          <Textarea
            placeholder="Clipboard content"
            autoComplete="off"
            disabled
            value={clipboardText}
            rows={20}
            resize="none"
          />
        </GridItem>
        <GridItem>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
              <Button colorScheme="blue" type="submit">
                Write text to clipboard
              </Button>
              <Spacer h="12px" />
              <ControlTextarea
                name="input"
                required
                placeholder="Input text for clipboard"
                errorBorderColor="red"
                autoComplete="off"
                rows={20}
                resize="none"
              />
            </form>
          </FormProvider>
        </GridItem>
      </Grid>
    </Box>
  );
};
