import { Link as Anchor } from "react-router-dom";
const MiddleNavBar = () => {
  return (
    <>
      <div className="w-[100%] 2xl:h-[40px]  lg:h-8 bg-black flex justify-between fixed top-0 z-50 pb-2">
        <div className="text-white w-full flex lg:justify-between justify-start px-4 items-center">
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <h2 className="text-white text-xs hidden lg:block">
              Free shipping on purchases over $499
            </h2>
          </div>
          <div className="lg:block text-white flex justify-center items-center content-center py-1 lg:px-10 gap-12">
            <Anchor
              to="/about"
              className="mx-2 2xl:text-lg text-sm hover:underline"
            >
              {" "}
              About
            </Anchor>
            <Anchor
              to="/contact"
              className="mx-2 2xl:text-lg text-sm  hover:underline"
            >
              {" "}
              Contact
            </Anchor>
            <Anchor
              to="/attendance"
              className="mx-2 2xl:text-lg text-sm  hover:underline"
            >
              {" "}
              Attendance
            </Anchor>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleNavBar;
