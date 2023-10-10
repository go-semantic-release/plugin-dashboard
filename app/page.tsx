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
import style from "./page.module.css";

function TestComponent({ id }: { id: string }) {
  return (
    <Box className={style.card}>
      <Card>
        <Grid columns="2">
          <Flex>
            <Heading as="h2" size="4">
              my-cool-plugin-{id}
            </Heading>
          </Flex>
          <Flex direction="row" gap="3" justify="end">
            <Tooltip content="This is an official go-semantic-release plugin.">
              <Badge color="cyan">
                <CheckCircledIcon />
                official
              </Badge>
            </Tooltip>
            <Badge color="green">v1.2.3</Badge>
          </Flex>
        </Grid>

        <Text size="2" className={style.tcText}>
          A plugin for go-semantic-release
        </Text>
      </Card>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <Flex direction="row" gap="4" wrap="wrap" justify="center" align="start">
        {[...Array(11)].map((_, i) => (
          <TestComponent id={i.toString()} key={i} />
        ))}
      </Flex>
    </>
  );
}
