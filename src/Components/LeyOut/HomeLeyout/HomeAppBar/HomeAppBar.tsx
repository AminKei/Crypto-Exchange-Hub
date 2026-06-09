import Button from "../../../BasedComponents/BaseUi/Button/Button";

const HomeAppBar = () => {
  return (
    <div className="flex w-full lg:justify-evenly justify-between items-center p-5  gap-1 bg-[#ffffff] border-b cursor-pointer ">
      <div className="flex items-center">
        <span className="text-black font-bold text-lg ml-1">Crypto</span>
        <span className="text-orange-500 font-bold text-lg">Hub </span>
      </div>

      <div className="justify-between items-center gap-4 lg:flex hidden ">
        <nav className="lg:flex hidden space-x-6 justify-center items-center">
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500"
            onClick={() => (document.location = "/traderoom")}
          >
            Exchange 
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500"
            onClick={() => (document.location = "market")}
          >
            Market
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Discover
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            APIs
          </a>
        </nav>
      </div>

      <div className="flex  items-center gap-3">
        <Button
          bgColor="#FFFFFF"
          border="solid 1px orange"
          color="orange"
          onClick={() => (document.location = "/signup")}
          width={100}
          height={40}
        >
          SignUp
        </Button>
        <Button
          onClick={() => (document.location = "/traderoom")}
          width={100}
          height={40}
        >
          Trade Now
        </Button>
      </div>
    </div>
  );
};

export default HomeAppBar;
