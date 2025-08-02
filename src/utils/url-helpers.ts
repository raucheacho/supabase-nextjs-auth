import { NextRequest, NextResponse } from "next/server";

export function getHostnameAndPort(request: NextRequest) {
  const hostnameWithPort = request.headers.get("host");
  const [realHostname, port] = hostnameWithPort?.split(":") || [];

  const hostname = realHostname;

  return [hostname, port];
}

export function buildUrl(applicationPath: string, request: NextRequest) {
  const [hostname, port] = getHostnameAndPort(request);
  const portSuffix = port && port !== "443" ? `:${port}` : "";
  const { protocol } = request.nextUrl;

  const baseUrl = `${protocol}//${hostname}${portSuffix}/`;

  return new URL(applicationPath, baseUrl);
}

export function getRedirect(path: string, request: NextRequest) {
  return NextResponse.redirect(buildUrl(path, request), 302);
}
