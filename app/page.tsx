import { Flex } from "@radix-ui/themes";
import { getAllPlugins } from "./lib/registry";
import { Search } from "./components/Search";
import { PluginCard } from "./components/PluginCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { s: string | undefined };
}) {
  const plugins = await getAllPlugins();
  plugins.sort((a, b) => a.localeCompare(b));
  const filteredPlugins = plugins.filter(
    (p) =>
      searchParams.s === undefined || p.includes(searchParams.s.toLowerCase()),
  );
  return (
    <>
      <Search />
      <Flex direction="row" gap="4" wrap="wrap" justify="center" align="start">
        {filteredPlugins.map((p) => (
          <PluginCard key={p} name={p} />
        ))}
      </Flex>
    </>
  );
}
