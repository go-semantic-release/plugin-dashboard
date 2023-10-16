import { Flex, Text } from "@radix-ui/themes";

import style from "@/app/layout.module.css";

export default function Loading() {
  return (
    <Flex align="center" justify="center" className={style.loading}>
      <Text color="gray" weight="light">
        Loading...
      </Text>
    </Flex>
  );
}
