// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  // className={`${flexBetween}`}
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow ";
  return (
    <nav>
      {/* nav bar parent div,the outer div which take the whole with */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        {/* inner div for the logo 83% of the width*/}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* this div is divided into two div for the left side logo and the right side*/}
          <div className={`${flexBetween} w-full gap-16 `}>
            <img src={Logo} alt="logo" />

            {/* right entire side div */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* div for the inner left side for the home service,our classes contact and the rest */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="our classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* inner left side div ends here */}

                {/* div for inner right side start thus the sign and become and member ends */}
                <div className={`${flexBetween} gap-8 `}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>

                {/* div for inner right side thus the sign and become and member ends */}
              </div>
            ) : (
              <div>
                <button
                  className=" rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              </div>
            )}
            {/* right entire side div end her */}
          </div>
          {/* div for left side logo ends here */}
        </div>
        {/* inner div ends here */}
      </div>

      {/* MOBILE MENU MODA */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/*  close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl ">
            <Link
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="our classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}

      {/* parent div end her */}
    </nav>
  );
};

export default Navbar;
