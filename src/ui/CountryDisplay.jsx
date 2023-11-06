import BorderCountry from "./BorderCountry";

function CountryDisplay({ country }) {
  if (!country) return;
  const [data] = country;
  console.log(data);

  const native = Object.values(data.name.nativeName)[0].common;
  const currency = Object.values(data.currencies)[0].name;
  const languages = Object.values(data.languages);

  return (
    <div className=" pt-24 flex flex-col md:flex-row gap-x-24 items-center ">
      <figure className="">
        <img
          className="md:w-[600px] md:h-[400px] h-[213px] w-[320px] "
          src={data.flags.png}
          alt={data.name.common}
        />
      </figure>

      <div className="flex flex-col gap-7 w-[320px] md:w-auto">
        <h2 className=" mt-10 text-[1.7rem] md:text-[2.5rem] font-bold">
          {data.name.common}
        </h2>
        <div className="flex gap-x-24 gap-y-14 md:flex-row flex-col">
          <div className="text-[1.1rem] md:text-[1.3rem] font-semibold grid gap-3">
            <p>
              Native Name:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {native}
              </span>
            </p>
            <p>
              Population:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {data.population.toLocaleString()}
              </span>
            </p>
            <p>
              Region:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {data.region}
              </span>
            </p>
            <p>
              Sub Region:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {data.subregion}
              </span>
            </p>
            <p>
              Capital:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {data.capital}
              </span>
            </p>
          </div>
          <div className=" text-[1.1rem] md:text-[1.3rem] font-semibold flex flex-col gap-3">
            <p>
              Top Level Domain:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {data.tld}
              </span>
            </p>
            <p>
              Currency:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {currency}
              </span>
            </p>
            <p>
              Languages:{" "}
              <span className=" text-gray-700 font-normal dark:text-gray-300">
                {languages.join(", ")}
              </span>
            </p>
          </div>
        </div>
        {data.borders && (
          <div className="flex md:items-center md:flex-row flex-col md:gap-3 gap-4">
            <p className="text-[1.1rem] font-semibold md:text-[1.3rem]">
              Border Countries:
            </p>{" "}
            <span className="flex items-center gap-2">
              {data.borders.map((country) => (
                <BorderCountry country={country} />
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDisplay;
