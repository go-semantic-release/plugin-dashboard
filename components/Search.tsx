import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";

import style from "./Search.module.css";

export function Search({
  value,
  onChange,
}: {
  value: string;
  onChange: (_: string) => void;
}) {
  return (
    <Flex justify="center" m="6">
      <TextField.Root className={style.search}>
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
