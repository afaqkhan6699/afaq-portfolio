import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: {
    default: 'Muhammad Afaq | Software Engineer',
    template: '%s | Muhammad Afaq',
  },
  description: 'Muhammad Afaq is a software engineer and WordPress developer building fast, modern websites and web apps.',
  keywords: [
    'Muhammad Afaq',
    'Software Engineer',
    'WordPress Developer',
    'Web Developer',
    'Frontend Developer',
    'Pakistan',
  ],
  authors: [{ name: 'Muhammad Afaq' }],
  creator: 'Muhammad Afaq',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Muhammad Afaq | Software Engineer',
    description: 'Software engineer and WordPress developer building fast, modern websites and web apps.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Muhammad Afaq | Software Engineer',
    description: 'Software engineer and WordPress developer building fast, modern websites and web apps.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
