import type { Params, PartialRouteObject, RouteObject } from 'react-router';
import type { JSResourceReference } from 'utils/JSResource';
import type { Dispatch } from 'types/redux';

export type EntryPointComponentProps<PreparedProps> = React.PropsWithChildren<{
  prepared: PreparedProps;
}>;

export type EntryPoint<PreparedProps, ComponentProps = EntryPointComponentProps<PreparedProps>> = {
  component: JSResourceReference<React.ComponentType<ComponentProps>>;
  prepare: (matchParams: Params, dispatch: Dispatch) => PreparedProps;
};

export interface EntryPointRouteObject extends RouteObject {
  preloadCode?: () => void;
  children?: EntryPointRouteObject[];
}

export interface EntryPointPartialRouteObject extends PartialRouteObject {
  preloadCode?: () => void;
  children?: EntryPointPartialRouteObject[];
}
