import Link from "next/link";

export default function NavBar(){
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1 gap-2">
                <Link className="text-xl normal-case btn btn-ghost" href="/">MyGoals</Link>
                <Link className="text-xl normal-case btn btn-ghost" href="/login/">Login</Link>
            </div>
         </div>
    ) 
}