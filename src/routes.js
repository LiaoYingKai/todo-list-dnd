import loadComponent from './route/loadable';

const Home = loadComponent({ loader: () => import('./pages/Home') });

export const routePaths = {
	HOME: '/',
};

const {
	HOME,
} = routePaths;

const routes = [
	{
		path: HOME,
		component: Home,
		exact: true,
	},
];

export default routes;
