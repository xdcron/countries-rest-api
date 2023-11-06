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
import { data } from "autoprefixer";

function CountryList() {
  const maxInitialCountries = 32;
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
      console.log(data);
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
      console.log(countryList);
      console.log("success");
    },
    onError: () => {
      alert("an error occured");
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  function increaseLimit() {
    setLimit((lim) => lim + increaseCountriesShownNum);
  }

  return (
    <div className="px-4 py-14 md:px-20 flex flex-col gap-10 items-center justify-center w-full h-auto bg-veryLightGrey dark:bg-veryDarkBlue transition-all duration-200">
      <div className="flex md:items-center md:flex-row flex-col md:justify-between w-full gap-3 md:px-4">
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
            <div className=" mt-6 w-full flex flex-wrap gap-16 justify-evenly">
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

      <div className="w-full">
        {limit < countries.length && !error && !isLoading && (
          <button
            onClick={increaseLimit}
            className=" bg-white py-3 px-5 rounded-md shadow-lg font-semibold text-veryDarkBlueText"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default CountryList;
