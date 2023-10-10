import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Container, Heading, Theme, Link as RadixLink } from "@radix-ui/themes";
import style from "@/app/page.module.css";
import Link from "next/link";

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
    <html lang="en" className="dark">
      <body>
        <Theme appearance="dark">
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
