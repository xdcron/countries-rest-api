import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className=" text-veryDarkBlueText text-[1rem] md:text-[1.4rem] font-bold dark:text-white "
    >
      <h1>Where in the world?</h1>
    </Link>
  );
}

export default Logo;
