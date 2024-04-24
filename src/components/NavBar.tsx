import Link from "next/link";
import Logo from "./Logo";

function Header() {
    return (
        <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
            <Logo />
            <div className="flex items-center">
                <Link className="font-black pr-14 text-2xl" href="/dashboard">Dashboard</Link>
                <Link className="font-black pr-14 text-2xl" href="/search">Find a Doctor</Link>
                <Link className="font-black pr-14 text-2xl" href="/insurance">Insurance</Link>
                <Link className="font-black pr-14 text-2xl" href="/patientappointments">My Appointments</Link>
                <Link className="font-black pr-14 text-2xl" href="/account">Profile</Link>
                <Link className="font-black pr-14 text-2xl" href="/">Logout</Link>
            </div>
        </nav>
    );
}

export default Header;
