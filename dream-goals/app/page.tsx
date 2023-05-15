import Link from "next/link";

export default async function Home(){
    return (
        <div>
            <h1 className="">This works</h1>
            <Link href="/"></Link>
        </div>
    )
}