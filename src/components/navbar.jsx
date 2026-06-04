import lines from "../assets/line 22.svg";

function navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      
      {/* Logo */}
      <div className="flex items-center gap-1 md:gap-0.5">
  <h1 className="font-gerbil text-base md:text-xl lg:text-2xl font-normal">
    Elemental
  </h1>
</div>

      {/* Menu */}
     <ul className="hidden md:flex gap-16 font-satoshi">
  <li className="cursor-pointer text-lg">Home</li>
  <li className="cursor-pointer text-lg">Studio</li>
  <li className="cursor-pointer text-lg">Services</li>
  <li className="cursor-pointer text-lg">Contact</li>
  <li className="cursor-pointer text-lg">FAQs</li>
</ul>
      <div className="flex flex-col gap-0.5 md:gap-1">
  <img
    src={lines}
    alt="decorative lines"
    className="w-5 md:w-5 lg:w-6"
  />
  <img
    src={lines}
    alt="decorative lines"
    className="w-5 md:w-5 lg:w-6"
  />
</div>
     
    </nav>
  );
}

export default navbar;
