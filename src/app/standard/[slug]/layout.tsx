import Link from "next/link";

export default function Layout({
  children,
}: // params,
{
  children: React.ReactNode;
  // params: Promise<{ slug: string }>;
}) {
  // const slug = (await params).slug;
  const slug = "skibidi2";
  return (
    <div>
      <h1>This is the layout...</h1>
      <p>The slug is: {slug}</p>
      {children}
      <Link href={`/standard/${slug}/foo`}>Foo</Link>
      <Link href={`/standard/${slug}/bar`}>Bar</Link>
      <h1>children:</h1>
      <div>{children}</div>
    </div>
  );
}
