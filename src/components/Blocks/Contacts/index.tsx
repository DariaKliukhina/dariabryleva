"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Contacts.module.css";
import { useState } from "react";
import { PrimaryButton } from "@/components/Bits/PrimaryButton";
import { PrimaryTextInput } from "@/components/Bits/FormFields/PrimaryTextInput";
import { PrimaryTextarea } from "@/components/Bits/FormFields/PrimaryTextarea";

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
  onSuccess: () => void;
};

type FormProps = {
  email: string;
  name: string;
  message: string;
  access_key: string | undefined;
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
  onSuccess,
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

  async function handleSubmit(data: FormProps) {
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
        onSuccess();
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
          <Flex gap={{base: rem(4), xs: rem(14)}} direction={{ base: "column", xs: "row" }}>
            <PrimaryTextInput
              withAsterisk={true}
              label={email}
              placeholder={emailPlaceholder}
              {...form.getInputProps("email")}
            />
            <PrimaryTextInput
              withAsterisk={true}
              label={name}
              placeholder={namePlaceholder}
              {...form.getInputProps("name")}
            />
          </Flex>

          <PrimaryTextarea
            withAsterisk={true}
            label={message}
            placeholder={messagePlaceholder}
            {...form.getInputProps("message")}
          />
        </Stack>

        <Center mt="md">
          <PrimaryButton type="submit">{submit}</PrimaryButton>
        </Center>
      </form>
    </Box>
  );
};
