import { promises } from "dns";

export default async function Section({params}: {params: Promise<{section: string}>}) {
 const {section} = await params
    return <h1> My Test {section}</h1>;
}