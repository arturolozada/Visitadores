/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import { MenuItem } from '../intefaces/appinterfaces';

export const menuItems: MenuItem[] = [
    {
      name: 'Medico General 1',
      icon: 'star-outline',
      component: 'MedGenUno',
    },
    {
      name: 'Medico General 2',
      icon: 'football-outline',
      component: 'MedGenDos',
    },
    {
        name: 'Medico Internista',
        icon: 'medkit',
        component: 'MedInterno',
    },
    {
        name: 'Medico Ortopedista',
        icon: 'bicycle-outline',
        component: 'MedOrtopedia',
    },
    {
        name: 'Medico Pediatra',
        icon: 'body-outline',
        component: 'MedPediatra',
    },
];