export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm">
      <h1 className="text-2xl font-bold">
        SnapBooth
      </h1>

      <div className="flex gap-6">
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
