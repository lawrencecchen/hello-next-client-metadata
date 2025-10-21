import Link from "next/link";

export const dynamic = "force-static";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div>
      <h1>This is the layout...</h1>
      <p>The slug is: {slug}</p>
      {children}
      <Link href={`/force-static/${slug}/foo`}>Foo</Link>
      <Link href={`/force-static/${slug}/bar`}>Bar</Link>
      <h1>children:</h1>
      <div>{children}</div>
    </div>
  );
}
