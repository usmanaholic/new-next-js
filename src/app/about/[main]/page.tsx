export default async function Main( { params }: { params: Promise<{ main: string } > }) {

    const { main } = await params


    return <h1>Hello {main}</h1>;
}