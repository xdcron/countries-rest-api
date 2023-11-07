import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className=" text-veryDarkBlueText text-[1rem] md:text-[1.4rem] font-bold dark:text-white "
    >
      Where in the world?
    </Link>
  );
}

export default Logo;
