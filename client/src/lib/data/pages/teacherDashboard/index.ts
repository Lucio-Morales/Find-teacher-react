import { PageNavigationItemDto } from '../../../../components/page/Nav/types';

const navItems: PageNavigationItemDto[] = [
  {
    title: 'Publications',
    key: 'publications',
    path: '/teacher-dashboard/publications',
    index: true,
    basePageUrl: '/dashboard',
  },
  {
    title: 'Your students',
    key: 'your_students',
    path: '/teacher-dashboard/your_students',
  },
  {
    title: 'Forum',
    key: 'forum',
    path: '/teacher-dashboard/forum',
  },
];

const teacherDashboardSectionMap = {
  public: 'public',
  your_students: 'your_students',
  news: 'news',
};

export { navItems, teacherDashboardSectionMap };
