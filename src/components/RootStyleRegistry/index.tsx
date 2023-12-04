import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "@/theme";

export function RootStyleRegistry({ children }: { children: any }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
