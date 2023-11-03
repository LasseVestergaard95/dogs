export const dynamic= "force-dynamic"
export const metadata={
  title:"Home",
  description: "A homepage",
}

const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

console.log(data)
export default function Home() {
  return (
    <main>
      <h1>Hej</h1>
      <img src={data.message} alt="" />
    </main>
  )
}
