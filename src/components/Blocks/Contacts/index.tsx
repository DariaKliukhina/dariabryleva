"use client";
import {
  Box,
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
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
      access_key: process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : emailError),
      name: (value) => (value ? null : nameError),
      message: (value) => (value ? null : messageError),
    },
  });

  async function handleSubmit(data) {
    setIsLoading(true);
    const json = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        form.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      style={{
        opacity: isLoading ? 0.5 : 1,
        pointerEvents: isLoading ? "none" : "initial",
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
    </Box>
  );
};
