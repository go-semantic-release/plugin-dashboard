import Link from "next/link";
import { Flex, Heading } from "@radix-ui/themes";
export default function NotFound() {
  return (
    <Flex align="center" direction="column" my="9">
      <Heading as="h2" size="9">
        Not found
      </Heading>
      <p>Could not find the requested resource.</p>
      <p>
        View <Link href="/">all plugins</Link>
      </p>
    </Flex>
  );
}
