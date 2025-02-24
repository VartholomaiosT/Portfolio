declare module "expo-router" {
  type RelativePathString = string & { __brand: "relative-path" };
  type ExternalPathString = string & { __brand: "external-path" };

  type StaticRoutes = "/homepage" | "/layout" | `${string}`;
  type DynamicRoutes = `/homepage?${string}` | `/homepage#${string}`;

  export type ValidRoute =
    | RelativePathString
    | ExternalPathString
    | StaticRoutes
    | DynamicRoutes;
}

declare module "app/routes" {
  const routes: any;
  export default routes;
}
