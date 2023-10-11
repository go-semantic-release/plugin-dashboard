"use server";
import { getAllPlugins } from "@/lib/registry";
import { PluginOverview } from "@/app/client";

export default async function Home() {
  const plugins = await getAllPlugins();
  plugins.sort((a, b) => a.FullName.localeCompare(b.FullName));
  return <PluginOverview plugins={plugins} />;
}
