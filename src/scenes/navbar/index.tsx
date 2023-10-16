import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

const index = (props: Props) => {
  const [iconToggle, setIconToggle] = useState(true);
  const [onpenModbile, setOpenMobile] = useState(true);
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 border`}>
        <div className={`${flexBetween} mx-auto w-5/6 border`}>
          {/* left side */}
          <img src={Logo} alt="Logo" />

          {/* right side */}
          <div className={`${flexBetween}`}>
            {/* small screen */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border">
              {iconToggle ? <Bars3Icon /> : <XMarkIcon />}
            </div>
            {/* big screen */}
            <div className={`${flexBetween} gap-6 ${onpenModbile && "hidden"}`}>
              <div className={`${flexBetween}`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
              <div className={`${flexBetween}`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
