import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      className="w-full h-[88px] flex items-center justify-between py-4 px-10 text-white text-[16px] fixed top-0 left-0 z-50 border-b-2 border-dashed border-[#847571] pl-[160px] pr-[160px]"
      style={{
        backgroundColor: "#4a2b23",
        fontFamily: "fuente tipografica desktop",
      }}
    >
      <div className="flex items-center mx-auto md:mx-0">
        <img className="w-10" src={logo} alt="logo" />
        <h5
          className="ml-2"
          style={{
            fontFamily: "Pacifico",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          Coffee
        </h5>
      </div>
      <div
        className="flex items-center justify-center gap-[72px] text-lg "
        style={{
          fontFamily: "Pacifico",
          fontSize: "16px",
          fontWeight: 400,
          marginLeft: "597px",
        }}
      >
        <h5 className="hover:text-[#d4a74d] cursor-pointer">Home</h5>
        <h5 className="hover:text-[#d4a74d] cursor-pointer">About</h5>
        <h5 className="hover:text-[#d4a74d] cursor-pointer">Steps</h5>
        <h5 className="hover:text-[#d4a74d] cursor-pointer">Testimonial</h5>
      </div>
    </nav>
  );
};

export default Navbar;
