import "./globals.css";

export const metadata = {
  title: "ariuka's portfolio",
  description: "Hi, nice to meet you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
