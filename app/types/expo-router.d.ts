declare module "expo-router" {
  import { ComponentProps } from "react";
  import { ViewProps } from "react-native";

  interface StackScreenProps {
    name: string;
    options?: {
      title?: string;
      headerShown?: boolean;
      animation?: string;
    };
  }

  interface StackProps {
    screenOptions?: {
      headerShown?: boolean;
      animation?: string;
    };
    children?: React.ReactNode;
  }

  export const Stack: {
    (props: StackProps): JSX.Element;
    Screen: (props: StackScreenProps) => JSX.Element;
    Link: (
      props: ViewProps & { href: string; asChild?: boolean }
    ) => JSX.Element;
  };

  export function useRouter(): {
    replace: (route: string) => void;
    push: (route: string) => void;
    back: () => void;
  };

  export function redirect(route: string): never;

  export const Slot: () => JSX.Element;

  export const Redirect: (props: { href: string }) => JSX.Element;
}

declare module "app/types/expo-router" {
  const expoRouter: any;
  export default expoRouter;
}
