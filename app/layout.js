import Link from 'next/link';

export const metadata = {
  title: 'TODO Client server static dynamic rendering tests',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <ul>
          <li>
            <Link href='/'>home</Link>
          </li>
          <li>
            <Link href='/test1'>/test1</Link>
          </li>
          <li>
            <Link href='/test2'>/test2</Link>
          </li>
          <li>
            <Link href='/test3'>/test3</Link>
          </li>
          <li>
            <Link href='/test4'>/test4</Link>
          </li>
        </ul>
      </body>
    </html>
  );
}
