// src/theme.ts
'use client';
import { Poppins, Roboto_Flex } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable:'--font-poppins'
})

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-poppins)',
  },
});

export { theme, poppins };
