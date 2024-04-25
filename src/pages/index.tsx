import Link from "next/link";
import Logo from "../components/Logo";
import Image from "next/image";
import Footer from "../components/Footer";
import main_img from "../images/main-hero-image.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
        <Logo />
        <div className="flex items-center mr-1">
          <Link href="/faq" className="font-black pr-14 text-2xl">FAQ</Link>
          <Link href="/about" className="font-black pr-14 text-2xl">About Us</Link>
          <Link href="/login" className="font-black pr-14 text-2xl">Register</Link>
        </div>
      </nav>
      <main className="flex flex-col md:flex-row items-center justify-between mt-20 px-16">
        <div className="flex-1 p-8">
          <div className="text-left">
            <h1 className="font-bold text-4xl mb-4">
              Welcome to Medilink,
            </h1>
            <h3 className="text-3xl mb-4">
              Your trusted partner for healthcare management.
            </h3>
            <div>
              <p> Streamline your healthcare journey with Medilink's cutting-edge patient insurance management system. </p>
              <p> Seamlessly manage coverage, claims, and healthcare expenses with precision and ease. </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <Link href="/patientlogin" className="mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg mb-4 md:mr-4">I'm a Patient</Link>
              <Link href="/doctorlogin" className="mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg mb-4 md:mr-4">I'm a Doctor</Link>
              <Link href="/insurancelogin" className="mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">I sell Insurance Plans</Link>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <Image
            src={main_img}
            alt="Showcasing the patient and insurance management system"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
