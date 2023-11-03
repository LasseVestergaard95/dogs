export const dynamic = "force-dynamic";

export const metadata = {
  title: "Home",
  description: "A homepage",
};

export default async function Home() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1>Hej</h1>
      <div className="random-dog">
      <img src={data.message} alt="" /></div>
    </main>
  );
}
