import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");

  const pages = await res.json();

  const paths = pages.map((page) => {
    return { data: page.slug };
  });

  return paths;
}

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Dog({ params }) {
  const { slug } = params;
  console.log(slug);
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  if (res.status != 200) return notFound();
  const data = await res.json();

  return (
    <main>
      <Image
        src={data.image.url}
        alt={data.name}
        width={data.image.width}
        height={data.image.height}
        priority={true}
        sizes="(max-width: 768px) 100vw,
	(max-width: 1200px) 50vw,
  400px"
      />
      <h1>{data.name}</h1>
      <h2>{data.age} år</h2>
      <h3>{data.favouriteColor ? `I love ${data.favouriteColor}` : "I can't see colors"}</h3>
    </main>
  );
}
