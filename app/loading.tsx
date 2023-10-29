import { Flex, Text } from "@radix-ui/themes";

import { css } from "@/styled-system/css";

const loading = css({
  height: "50vh",
});

export default function Loading() {
  return (
    <Flex align="center" justify="center" className={loading}>
      <Text color="gray" weight="light">
        Loading...
      </Text>
    </Flex>
  );
}
