const css_object: React.CSSProperties = {
  margin: '0',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={css_object}>{children}</body>
    </html>
  );
}
