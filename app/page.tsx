import {
  Flex,
  Text,
  Heading,
  Grid,
  Box,
  Badge,
  Card,
  Tooltip,
} from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import style from "./page.module.css";
import { Search } from "./search";
import { getAllPlugins } from "./lib/registry";

function PluginCard({ name }: { name: string }) {
  return (
    <Box className={style.card}>
      <Card asChild>
        <Link href={`/plugins/${name}`}>
          <Grid columns="2">
            <Flex>
              <Heading as="h2" size="4">
                {name}
              </Heading>
            </Flex>
            <Flex direction="row" gap="3" justify="end" height="max-content">
              <Tooltip content="This is an official go-semantic-release plugin.">
                <Badge color="cyan">
                  <CheckCircledIcon />
                  official
                </Badge>
              </Tooltip>
              <Badge color="green">latest: v1.2.3</Badge>
            </Flex>
          </Grid>
          <Text size="2" className={style.tcText}>
            A plugin for go-semantic-release
          </Text>
        </Link>
      </Card>
    </Box>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: { s: string | undefined };
}) {
  const plugins = await getAllPlugins();
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
