import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import ProjectsPage from '../pages/projects/page';
import ProjectDetailPage from '../pages/projects/detail/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetailPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;