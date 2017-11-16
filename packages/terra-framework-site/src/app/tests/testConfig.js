import LayoutTests from './LayoutTests';
import ApplicationToolbarTests from './ApplicationToolbarTests';

const menuConfig = {
  '/tests/layout': {
    path: '/tests/layout',
    component: {
      default: {
        componentClass: LayoutTests,
      },
    },
  },
  '/tests/application-toolbar': {
    path: '/tests/application-toolbar',
    component: {
      default: {
        componentClass: ApplicationToolbarTests,
      },
    },
  },
};

export default menuConfig;
