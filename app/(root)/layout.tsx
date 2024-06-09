import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggetIn = { firstName: "Denis", lastName: "DD" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggetIn} />
      {children}
    </main>
  );
}
