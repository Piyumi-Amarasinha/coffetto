import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="w-full flex items-center justify-between py-4 px-10 text-white text-[16px] fixed top-0 left-0 z-50"
        style={{
          backgroundColor: "#4a2b23",
          fontFamily: "fuente tipografica desktop",
        }}
      >
        <div className="flex items-center">
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
          className="flex items-center justify-center gap-8 text-lg"
          style={{
            fontFamily: "Pacifico",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          <h5 className="hover:text-[#d4a74d] cursor-pointer">Home</h5>
          <h5 className="hover:text-[#d4a74d] cursor-pointer">About</h5>
          <h5 className="hover:text-[#d4a74d] cursor-pointer">Steps</h5>
          <h5 className="hover:text-[#d4a74d] cursor-pointer">Testimonial</h5>
        </div>
      </nav>
      <div className="w-full border-b-2 border-dotted border-[#644e49] mt-[56px]"></div>
    </>
  );
};

export default Navbar;
