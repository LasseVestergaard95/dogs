export default async function Henry(){
    const res = await fetch ("https://nice-dogs.vercel.app/api/dogs?slug=henry")
    const data=await res.json();
    console.log(data)
    return(
        <main>
            <img src={data.image.url} alt="" />
            <h1>{data.name}</h1>
            <h2>{data.age}år</h2>
            <h3>I love {data.favouriteColor}</h3>
        </main>

    )
}