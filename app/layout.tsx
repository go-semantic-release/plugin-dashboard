import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Box, Container, Heading, Theme } from "@radix-ui/themes";
import style from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "go-semantic-release plugins",
  description: "Browse plugins available for go-semantic-release",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark">
          <Container>
            <Heading size="8" className={style.heading}>
              go-semantic-release plugins
            </Heading>
            <Box height="9"></Box>
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
