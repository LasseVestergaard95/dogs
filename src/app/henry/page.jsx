import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <Image src={data.image.url} alt={data.name} width={data.image.width} height={data.image.height} priority={true} />
      <h1>{data.name}</h1>
      <h2>{data.age}år</h2>
      <h3>I love {data.favouriteColor}</h3>
    </main>
  );
}
