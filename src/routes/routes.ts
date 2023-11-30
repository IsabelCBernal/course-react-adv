import { lazy, LazyExoticComponent } from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: ShoppingPage,
        name: 'Home'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'About'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Settings'
    },
];