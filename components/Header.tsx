import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#F8C8DC] text-[#111111] py-5 shadow-md">
            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Ijato Precious-jane Okpen
                </div>

                <ul className="flex gap-6">
                    <li>
                        <Link
                            href="/"
                            className="text-[#383875] hover:text-[#E94878]"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className="text-[#383875] hover:text-[#E94878]"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}