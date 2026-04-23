import { Button } from "@heroui/react";
import Link from "next/link";

const NavPage = () => {
  const links = (
    <>
      <Link href="/Home" key="home">
        Home
      </Link>

      <Link href="/about" key="about">
        About
      </Link>

      <Link href="/contact" key="contact">
        Contact
      </Link>
      <Link href="/Users" key="users">
        Users
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator  backdrop-blur-lg bg-black">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">{links}</ul>
      </header>
    </nav>
  );
};
export default NavPage;
