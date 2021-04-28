/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import { MenuItem } from '../intefaces/appinterfaces';

export const menuItems: MenuItem[] = [
    {
      name: 'Médico General 1',
      icon: 'star-outline',
      component: 'MedGenUno',
    },
    {
      name: 'Médico General 2',
      icon: 'football-outline',
      component: 'MedGenDos',
    },
    {
        name: 'Médico Internista',
        icon: 'medkit',
        component: 'MedInterno',
    },
    {
        name: 'Médico Ortopedista',
        icon: 'bicycle-outline',
        component: 'MedOrtopedia',
    },
    {
        name: 'Médico Pediatra',
        icon: 'body-outline',
        component: 'MedPediatra',
    },
];