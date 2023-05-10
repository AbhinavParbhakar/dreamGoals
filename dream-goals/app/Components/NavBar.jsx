import Link from "next/link";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

function Navbar() {
    let {tokens, login, logout} = useContext(AuthContext)
    
    if (tokens == 0){
        return(
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="text-xl normal-case btn btn-ghost" href="/">MyGoals</Link>
                    <Link className="text-xl normal-case btn btn-ghost" href="/login/">Login</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                        </label>
                    <ul tabIndex="0" className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/"className="justify-between">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="text-xl normal-case btn btn-ghost" href="/">MyGoals</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                        </label>
                    <ul tabIndex="0" className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/"className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><Link href="/">Settings</Link></li>
                        <li><Link href="/">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
    
}

export default Navbar;