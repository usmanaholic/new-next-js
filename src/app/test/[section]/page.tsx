import { promises } from "dns";

export default async function Section({params}: {params: Promise<{section: string}>}) {
 const {section} = await params
    return <h1>Test {section}</h1>;
}