import { headers } from "next/headers";

// this is dynamic root, all pages withing this root will be automatically turned to dynamic, unless "force-static" is specified
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
