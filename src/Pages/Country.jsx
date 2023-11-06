import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry } from "../utilis/ApiCountries";
import { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import CountryDisplay from "../ui/CountryDisplay";
import "ldrs/Bouncy";

function Country() {
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(null);
  const { country } = useParams();
  console.log(country);
  const { mutate, data, isPending } = useMutation({
    mutationFn: getCountry,
    onSuccess: (data) => {
      setCountryData(data);
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    mutate(country);
  }, []);

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className=" h-full  md:px-20 py-14 pb-20 flex flex-col items-center px-4 ">
      <div className="w-full">
        <button
          onClick={handleBack}
          className=" self-start flex bg-white  items-center shadow-lg py-3 gap-4 px-8 font-medium rounded dark:bg-darkBlue transition-all duration-150"
        >
          <GoArrowLeft /> <span>Back</span>
        </button>
      </div>
      {data ? (
        <div className="h-full w-full">
          <CountryDisplay country={data} />
        </div>
      ) : (
        <l-bouncy
          color={
            document.documentElement.classList.contains("dark")
              ? "white"
              : "black"
          }
          size={40}
        ></l-bouncy>
      )}
    </div>
  );
}

export default Country;
