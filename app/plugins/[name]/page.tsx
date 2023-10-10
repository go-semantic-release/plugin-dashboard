import { notFound } from "next/navigation";
import { getPlugin } from "@/app/lib/registry";
import { Heading } from "@radix-ui/themes";

export default async function Plugin({ params }: { params: { name: string } }) {
  const plugin = await getPlugin(params.name);
  if (!plugin) {
    notFound();
  }
  return (
    <>
      <Heading>Plugin: {plugin.FullName}</Heading>
      <p>{plugin.LatestRelease.Version}</p>
    </>
  );
}
