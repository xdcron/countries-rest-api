import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry } from "../utilis/ApiCountries";
import { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import CountryDisplay from "../ui/CountryDisplay";
import "ldrs/Bouncy";

function Country() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const { country } = useParams();

  const { mutate, data, isPending } = useMutation({
    mutationFn: getCountry,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (err) => {
      setError(true);
    },
  });

  useEffect(() => {
    mutate(country);
  }, []);

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className=" h-full  md:px-20 py-12 pb-20 flex flex-col items-center px-4 ">
      <div className="w-full">
        <button
          onClick={handleBack}
          className=" self-start flex bg-white  items-center shadow-lg py-2 gap-3 px-4 sm:py-3 sm:gap-4 sm:px-8 font-medium rounded dark:bg-darkBlue transition-all duration-150"
        >
          <GoArrowLeft /> <span>Back</span>
        </button>
      </div>
      <div>
        {error && <div className="mt-10">Sorry something went wrong 😓😓</div>}
        {!isPending && !error && (
          <div className="h-full w-full">
            <CountryDisplay country={data} />
          </div>
        )}
        {isPending && (
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
    </div>
  );
}

export default Country;
