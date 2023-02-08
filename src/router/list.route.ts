import { FC, lazy } from 'react';
import { BOOKS } from './path-name.route';
const Books = lazy(() => import('@pages/Books/Books'));
export interface IRouteList {
  params?: { [key: string]: string };
  path: any;
  component: FC;
}
export const routeList: IRouteList[] = [
  {
    path: BOOKS,
    component: Books
  }
];
