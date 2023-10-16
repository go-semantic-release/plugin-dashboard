import { PluginOverview } from "@/app/client";
import { getAllPlugins } from "@/lib/registry";

export const revalidate = 300;
export default async function Home() {
  const plugins = await getAllPlugins();
  plugins.sort((a, b) => a.FullName.localeCompare(b.FullName));
  return <PluginOverview plugins={plugins} />;
}
