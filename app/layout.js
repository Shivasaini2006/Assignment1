import "./globals.css";

export const metadata = {
  title: "FlowVision - Premium Plant Store",
  description:
    "Discover the beauty and health of Earth's exhale with our premium plant collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
