"use server";
export async function getAllPlugins(): Promise<string[]> {
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
