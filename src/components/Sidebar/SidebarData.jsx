import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import MapIcon from '@mui/icons-material/Map';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarDate = [
  {
    title: 'Home',
    icon: <CottageIcon />,
    link: '/'
  },
  {
    title: 'Navigation',
    icon: <MapIcon />,
    link: '/navigation'
  },
  {
    title: 'Calculate',
    icon: <CalculateIcon />,
    link: '/calculate'
  },
  {
    title: 'Calendar',
    icon: <CalendarMonthIcon />,
    link: '/calendar'
  },
  {
    title: 'Setting',
    icon: <SettingsIcon />,
    link: '/setting'
  }
];
