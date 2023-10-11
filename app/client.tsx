"use client";
import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";

import type { Plugin } from "@/lib/registry";
import { Search } from "@/components/Search";
import { PluginCard } from "@/components/PluginCard";

export function PluginOverview({ plugins }: { plugins: Plugin[] }) {
  const [search, setSearch] = useState("");
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
      <Search onSearch={setSearch} />
      <Flex direction="row" gap="4" wrap="wrap" justify="center" align="start">
        {filteredPlugins.map((p) => (
          <PluginCard plugin={p} key={p.FullName} />
        ))}
      </Flex>
    </>
  );
}
