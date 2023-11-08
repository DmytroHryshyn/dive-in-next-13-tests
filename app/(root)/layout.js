import { headers } from "next/headers";

export default function RootLayout({ children }) {
  headers();
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
