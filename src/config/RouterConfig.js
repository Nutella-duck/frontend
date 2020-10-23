import React from 'react';
import HomeComponent from '../components/HomeComponent';
import LoginPage from '../components/LoginPage/LoginPage';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import TEST from '../components/search/main';
import MATRIXS from '../components/search/Matrixs/MatrixsPage';
import SYSTEM from '../components/search/system/SystemPage';
import WorkSpaceComponent from '../components/WorkSpace/WorkSpaceComponent';
import HPO from '../components/WorkSpace/HPOPage';

export const RouterConfig = [
  {
    path: '/',
    exact: true,
    component: () => <HomeComponent></HomeComponent>,
  },

  {
    path: '/login',
    exact: true,
    component: () => <LoginPage></LoginPage>,
  },

  {
    path: '/project',
    exact: true,
    component: () => <ProjectPage></ProjectPage>,
  },

  {
    path: '/workspace/:id',
    exact: true,
    component: () => <WorkSpaceComponent></WorkSpaceComponent>,
  },

  {
    path: '/run/matrixs/:id',
    exact: true,
    component: () => <MATRIXS></MATRIXS>,
  },
  {
    path: '/run/system/:id',
    exact: true,
    component: () => <SYSTEM></SYSTEM>,
  },
  {
    path: '/test',
    exact: true,
    component: () => <TEST></TEST>,
  },
  {
    path: '/hpolist/:id',
    exact: true,
    component: () => <HPO></HPO>,
  },
];
