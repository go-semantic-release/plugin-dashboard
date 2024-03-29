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
import { memo } from "react";

import type { Plugin } from "@/lib/registry";
import { css } from "@/styled-system/css";

const cardStyle = css({
  width: "400px",
});

export const PluginCard = memo(function PluginCard({
  plugin,
}: {
  plugin: Plugin;
}) {
  return (
    <Box className={cardStyle}>
      <Card asChild>
        <a href={plugin.URL} rel="noopener noreferrer" target="_blank">
          <Grid columns="2">
            <Flex>
              <Heading as="h2" size="4">
                {plugin.FullName}
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
          <Text size="2">{plugin.Description}</Text>
        </a>
      </Card>
    </Box>
  );
});
