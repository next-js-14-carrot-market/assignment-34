import TabBar from "@/components/tab-bar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="pt-11">{children}</div>
      <TabBar />
    </div>
  );
}
