import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import { formatDistanceToNow } from "date-fns";

import style from "./PluginCard.module.css";
import { getPlugin } from "@/lib/registry";

export async function PluginCard({ name }: { name: string }) {
  const plugin = await getPlugin(name);
  if (!plugin) {
    return null;
  }
  return (
    <Box className={style.card}>
      <Card asChild>
        <a href={plugin.URL} rel="noopener noreferrer" target="_blank">
          <Grid columns="2">
            <Flex>
              <Heading as="h2" size="4">
                {name}
              </Heading>
            </Flex>
            <Flex direction="row" gap="3" justify="end" height="max-content">
              <Tooltip
                content={`Published ${formatDistanceToNow(
                  new Date(plugin.LatestRelease.CreatedAt),
                )} ago.`}
              >
                <Badge color="green">v{plugin.LatestRelease.Version}</Badge>
              </Tooltip>
            </Flex>
          </Grid>
          <Text size="2">A plugin for go-semantic-release</Text>
        </a>
      </Card>
    </Box>
  );
}
