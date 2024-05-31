"use client";
import {
  Button,
  Center,
  Checkbox,
  Flex,
  Group,
  Stack,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Contacts.module.css";

type ContactsProps = {
  name: string;
  namePlaceholder: string;
  nameError: string;
  email: string;
  emailPlaceholder: string;
  emailError: string;
  message: string;
  messagePlaceholder: string;
  messageError: string;
  submit: string;
};

export const Contacts = ({
  name,
  namePlaceholder,
  nameError,
  email,
  emailPlaceholder,
  emailError,
  message,
  messagePlaceholder,
  messageError,
  submit,
}: ContactsProps) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : emailError),
      name: (value) => (value ? null : nameError),
      message: (value) => (value ? null : messageError),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack gap={rem(4)}>
        <Flex gap={rem(14)} direction={{ base: "column", xs: "row" }}>
          <TextInput
            withAsterisk
            label={email}
            placeholder={emailPlaceholder}
            className={classes.input}
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label={name}
            placeholder={namePlaceholder}
            className={classes.input}
            {...form.getInputProps("name")}
          />
        </Flex>

        <Textarea
          withAsterisk
          label={message}
          placeholder={messagePlaceholder}
          className={classes.input}
          {...form.getInputProps("message")}
        />
      </Stack>

      <Center mt="md">
        <Button type="submit">{submit}</Button>
      </Center>
    </form>
  );
};
