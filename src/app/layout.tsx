import '@/app/globals.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = { title: 'Test Inc', description: 'Build fast!' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body text-gray-800 bg-white">
        <header className="border-b">
          <nav className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-display text-xl font-bold">
              Test
            </Link>
            <ul className="flex gap-6 text-sm font-medium items-center">
              {[
                ['About', '/about'],
                ['Pricing', '/pricing'],
                // ['Blog', '/blog'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-gray-500">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant={'secondary'}>Sign In </Button>
              </li>
            </ul>
          </nav>
        </header>

        <main className="min-h-[calc(100vh-4rem)]">{children}</main>

        <footer className="bg-gray-900 py-12 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Test Inc
        </footer>
      </body>
    </html>
  );
}
