import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const slug = "skibidi";
  return (
    <div>
      <h1>This is the layout...</h1>
      <p>The slug is: {slug}</p>
      {children}
      <Link href={`/${slug}/foo`}>Foo</Link>
      <Link href={`/${slug}/bar`}>Bar</Link>
      <h1>children:</h1>
      <div>{children}</div>
    </div>
  );
}
