import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "@/theme";

export function RootStyleRegistry({ children }: { children: any }) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </>
  );
}
