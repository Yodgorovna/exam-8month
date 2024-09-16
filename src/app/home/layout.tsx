import Layout from "@/components/sidebar/Layout";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
