"use client";
import { Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import style from "./Search.module.css";
import { useRouter } from "next/navigation";

export function Search() {
  const router = useRouter();
  return (
    <Flex justify="center" m="6">
      <TextField.Root className={style.search}>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          autoFocus
          placeholder="Search the plugins…"
          onChange={(e) =>
            router.push(e.target.value ? `/?s=${e.target.value}` : "/")
          }
        />
      </TextField.Root>
    </Flex>
  );
}
