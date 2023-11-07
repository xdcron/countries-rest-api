import { Link } from "react-router-dom";

function CountryItem({ country }) {
  if (!country) return;
  return (
    <Link
      to={`${country.name.common}`}
      className="w-[270px] h-[384.77px] rounded-md flex flex-col bg-white dark:bg-darkBlue duration-200 gap-8 pb-6 shadow-lg"
    >
      <figure className="w-full h-[160px]">
        <img
          className=" rounded-tl-md rounded-tr-md w-full h-full shadow-md"
          src={country.flags.png}
          alt={country.name.common}
        />
      </figure>

      <div className="px-7 flex flex-col gap-6">
        <h3 className=" text-veryDarkBlueText dark:text-white font-bold text-[1.2rem]">
          {country.name.common}
        </h3>
        <div className="text-[1.1rem] font-medium grid gap-1 dark:text-white transition-all duration-200 text-veryDarkBlueText">
          <p>
            Population:{" "}
            <span className=" text-gray-700 font-normal dark:text-gray-200 transition-all duration-200">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p>
            Region:{" "}
            <span className=" text-gray-700 font-normal dark:text-gray-200 transition-all duration-200">
              {country.region}
            </span>
          </p>
          <p>
            Capital:{" "}
            <span className=" text-gray-700 font-normal dark:text-gray-200 transition-all duration-200">
              {country.capital}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryItem;
