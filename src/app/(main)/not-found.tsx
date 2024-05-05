"use client";
import { Box } from "@mantine/core";
import { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  useEffect(() => {
    redirect(`en${pathname}`);
  }, []);

  return <Box className="pageContent">Page Not Found</Box>;
}
