import { useEffect, useRef, useState } from "react";
import Filter from "../ui/Filter";
import Search from "../ui/Search";
import {
  filterCountries,
  getCountries,
  getCountry,
} from "../utilis/ApiCountries";
import CountryItem from "../ui/CountryItem";
import { useMutation } from "@tanstack/react-query";
import "ldrs/Bouncy";

function CountryList() {
  const maxInitialCountries = 28;
  const increaseCountriesShownNum = 12;

  const [countries, setCountries] = useState([]);
  const [isLoading, setisloading] = useState(false);
  const [option, setOption] = useState("");
  const [limit, setLimit] = useState(maxInitialCountries);
  const [error, setError] = useState(false);
  async function handleFilterRegion(opt) {
    try {
      setisloading(true);
      const data = await filterCountries(opt);
      setCountries(data);
    } catch (err) {
      console.error("lol");
    } finally {
      setisloading(false);
    }
  }

  async function handleQuery(query) {
    try {
      setError(false);
      setisloading(true);
      const data = await getCountry(query);
      setCountries(data);
    } catch (err) {
      setError(true);
    } finally {
      setisloading(false);
    }
  }

  const { mutate, data: countryList } = useMutation({
    mutationFn: getCountries,
    onSuccess: (data) => {
      setCountries(data);
      console.log("success");
    },
    onError: () => {
      alert("Could not get Countries");
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  function increaseLimit() {
    setLimit((lim) => lim + increaseCountriesShownNum);
  }

  return (
    <div className="relative flex flex-col gap-2 items-center justify-center w-full  bg-veryLightGrey dark:bg-veryDarkBlue transition-all duration-200">
      <div className=" sticky top-0  flex md:items-center md:flex-row flex-col md:justify-between w-full gap-3 bg-veryLightGrey dark:bg-veryDarkBlue transition-all duration-200 px-4 py-9 md:px-20 ">
        <Search onSubmit={handleQuery} />
        <Filter
          option={option}
          onChange={setOption}
          onClick={handleFilterRegion}
        />
      </div>
      {countries.length === 0 || (isLoading && !error) ? (
        <l-bouncy
          color={
            document.documentElement.classList.contains("dark")
              ? "white"
              : "black"
          }
          size={40}
        ></l-bouncy>
      ) : (
        <div>
          {!error ? (
            <div className=" mt-6 w-full grid md:grid-cols-4 gap-14 sm:grid-cols-3 xsm:grid-cols-2 grid-cols-1">
              {countries?.slice(0, limit).map((country) => (
                <CountryItem country={country} key={country.name.common} />
              ))}
            </div>
          ) : (
            <div className="text-[2rem]">
              Could not find the country you are looking for 😓😓
            </div>
          )}
        </div>
      )}

      <div className="w-full pl-14 py-4">
        {limit < countries.length && !error && !isLoading && (
          <button
            onClick={increaseLimit}
            className=" bg-white py-3 px-5 rounded-md shadow-lg font-semibold text-veryDarkBlueText dark:bg-darkBlue dark:text-white"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default CountryList;
