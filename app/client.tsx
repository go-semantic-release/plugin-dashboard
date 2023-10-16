"use client";
import { Flex } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { PluginCard } from "@/components/PluginCard";
import { Search } from "@/components/Search";
import type { Plugin } from "@/lib/registry";

export function PluginOverview({ plugins }: { plugins: Plugin[] }) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("s") || "");
  const [filteredPlugins, setFilteredPlugins] = useState(plugins);
  useEffect(() => {
    setFilteredPlugins(
      plugins.filter(
        (p) => !search || p.FullName.includes(search.toLowerCase()),
      ),
    );
  }, [search, plugins]);
  return (
    <>
      <Search value={search} onChange={setSearch} />
      <Flex direction="row" gap="4" wrap="wrap" justify="center" align="start">
        {filteredPlugins.map((p) => (
          <PluginCard plugin={p} key={p.FullName} />
        ))}
      </Flex>
    </>
  );
}
