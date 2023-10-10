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
import style from "./PluginCard.module.css";
import Link from "next/link";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { getPlugin } from "@/app/lib/registry";

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
              <Tooltip content="This is an official go-semantic-release plugin.">
                <Badge color="cyan">
                  <CheckCircledIcon />
                  official
                </Badge>
              </Tooltip>
              <Tooltip
                content={`This is the latest release of the plugin and was published ${plugin.LatestRelease.CreatedAt}.`}
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
