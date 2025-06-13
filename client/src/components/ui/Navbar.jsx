import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-4 py-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
};

export default Navbar;
