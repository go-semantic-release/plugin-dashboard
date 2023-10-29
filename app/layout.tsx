import "@radix-ui/themes/styles.css";

import {
  Container,
  Flex,
  Heading,
  Link as RadixLink,
  Theme,
} from "@radix-ui/themes";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

import style from "./layout.module.css";

export const metadata: Metadata = {
  title: "go-semantic-release plugins",
  description: "Browse plugins available for go-semantic-release.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Theme appearance="dark">
          <Flex direction="row" justify="end" px="2">
            <RadixLink
              href={`https://github.com/go-semantic-release/plugin-dashboard/releases/tag/v${process.env.VERSION}`}
              rel="noopener noreferrer"
              target="_blank"
              color="gray"
            >
              v{process.env.VERSION}
            </RadixLink>
          </Flex>
          <Container>
            <Heading size="8" className={style.heading}>
              <Link href="/" passHref legacyBehavior>
                <RadixLink>go-semantic-release plugins</RadixLink>
              </Link>
            </Heading>
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
