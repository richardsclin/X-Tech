import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [  
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      }
    ],
  },
  {
    title: '查詢',
    icon: 'nb-search',
    children: [
      {
        title: '交易查詢',
      },
      {
        title: '部位查詢',
      },
    ],
  }
];
