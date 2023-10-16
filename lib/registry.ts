import "server-only";

export async function getPluginNames(): Promise<string[]> {
  const res = await fetch(
    "https://registry.go-semantic-release.xyz/api/v2/plugins",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch plugins");
  }
  return await res.json();
}

export interface Plugin {
  FullName: string;
  Type: string;
  Name: string;
  URL: string;
  Description: string;
  LatestRelease: Release;
  Versions: string[];
  UpdatedAt: string;
}

export interface Release {
  Version: string;
  Prerelease: boolean;
  CreatedAt: string;
  Assets: unknown;
  UpdatedAt: string;
}

export async function getPlugin(name: string): Promise<Plugin | null> {
  const res = await fetch(
    `https://registry.go-semantic-release.xyz/api/v2/plugins/${name}`,
  );
  if (!res.ok) {
    return null;
  }
  return await res.json();
}

export async function getAllPlugins(): Promise<Plugin[]> {
  const pluginsNames = await getPluginNames();
  const plugins: Plugin[] = [];
  for (const name of pluginsNames) {
    const plugin = await getPlugin(name);
    if (!plugin) continue;
    plugins.push(plugin);
  }
  return plugins;
}
