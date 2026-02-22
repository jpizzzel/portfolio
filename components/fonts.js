import { M_PLUS_Rounded_1c } from 'next/font/google'
import { Inter } from 'next/font/google'

export const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '700'],
  display: 'swap',
  variable: '--font-m-plus-rounded',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})
