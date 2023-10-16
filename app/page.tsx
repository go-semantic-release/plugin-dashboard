import { Flex, Text } from "@radix-ui/themes";
import { Suspense } from "react";

import { getAllPlugins } from "@/lib/registry";

import { PluginOverview } from "./client";
import style from "./layout.module.css";

export const revalidate = 300;

function Loading() {
  return (
    <Flex align="center" justify="center" className={style.loading}>
      <Text>Loading...</Text>
    </Flex>
  );
}

export default async function Home() {
  const plugins = await getAllPlugins();
  plugins.sort((a, b) => a.FullName.localeCompare(b.FullName));
  return (
    <Suspense fallback={<Loading />}>
      <PluginOverview plugins={plugins} />
    </Suspense>
  );
}
