import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";

import { css } from "@/styled-system/css";

const searchStyle = css({
  width: {
    base: "100vw",
    sm: "50vw",
    lg: "30vw",
  },
});

export function Search({
  value,
  onChange,
}: {
  value: string;
  onChange: (_: string) => void;
}) {
  return (
    <Flex justify="center" m="6">
      <TextField.Root className={searchStyle}>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          autoFocus
          placeholder="Search the plugins…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </TextField.Root>
    </Flex>
  );
}
