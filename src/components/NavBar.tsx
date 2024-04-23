import Link from "next/link";
import Logo from "./Logo";

function Header() {
    return (
        <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100">
            <Logo />
            <div className="flex items-center mr-1">
                <Link className="font-black pr-14 text-3xl" href="/dashboard">Dashboard</Link>
                <Link className="font-black pr-14 text-3xl" href="/search">Search</Link>
                <Link className="font-black pr-14 text-3xl" href="/map">Map</Link>
                <Link className="font-black pr-14 text-3xl" href="/questionnaire">Covid Questionaire</Link>
                <Link className="font-black pr-14 text-3xl" href="/insurance"> Insurance </Link>
                <Link className="font-black pr-14 text-3xl" href="/patientreview">Patient Review</Link>
                <Link className="font-black pr-14 text-3xl" href="/account">Account</Link>
            </div>
        </nav>
    );
}

export default Header;
