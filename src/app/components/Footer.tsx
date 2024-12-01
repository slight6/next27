
// import Link from "next/link";
import SmallHr from "./SmallHr";
import StyledHr from "./StyledHr";

const Footer = () => {
    return (
        <nav className="footer">
            <StyledHr />
            <footer className="bg-gray-700 text-orange-400 py-8">
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    <ul className="space-y-2">
                        <li className="flex justify-center">
                            <SmallHr />
                        </li>
                        <li>
                            <a href="/" className="flex justify-center text-orange-400 hover:text-white transition">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="flex justify-center text-orange-400 hover:text-white transition">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="flex justify-center text-orange-400 hover:text-white transition">Contact</a>
                        </li>
                        <li>
                            <a href="/services" className="flex justify-center text-orange-400 hover:text-white transition">Services</a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <SmallHr />
                        </li>
                        <li>
                            <a href="#" className="flex justify-center text-orange-400 hover:text-white transition">blank</a>
                        </li>
                        <li>
                            <a href="/portfolio" className="flex justify-center text-orange-400 hover:text-white transition">Portfolio</a>
                        </li>
                        <li>
                            <a href="#" className="flex justify-center text-orange-400 hover:text-white transition">blank</a>
                        </li>
                        <li>
                            <a href="#" className="flex justify-center text-orange-400 hover:text-white transition">blank</a>
                        </li>
                    </ul>

                </div>
            </footer>
           

        </nav>
    )
}

export default Footer;