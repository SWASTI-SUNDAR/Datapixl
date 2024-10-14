// src/app/cities/CitiesScreen.js

"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxStoreHooks";
import { useFetchCities } from "@/hooks/tripHook";
import { setCities, setCityName } from "@/redux-store/slices/citiesSlice";
import LoadingOverlay from "@/components/LoadingOverlay";
import Link from "next/link";
// import Head from "next/head";

const CitiesScreen = () => {
  const dispatch = useAppDispatch();
  const [cityId, setCityId] = useState("");
  const {
    data: citiesData,
    error: citiesError,
    isLoading: fetchingCitiesData,
  } = useFetchCities();

  useEffect(() => {
    if (citiesData?.length > 0 && !citiesError) {
      dispatch(setCities(citiesData));
    }
  }, [citiesData, citiesError, dispatch]);

  const { cities } = useAppSelector((state) => state.citiesSlice);
  const destinations = cities ? cities.filter((city) => city.Status !== 2) : [];

  if (fetchingCitiesData) {
    return <LoadingOverlay />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="w-[99%] sm:w-[95%] h-screen flex-col pt-24 sm:pt-18 lg:pt-6 justify-center items-center m-auto">
        {destinations && (
          <div className="flex flex-col md:flex-row justify-center items-center m-auto gap-4">
            {destinations.map((city) => (
              <Link
                key={city.Uuid}
                href={`/cities/${city.Name}`} // Use Next.js Link for routing
                onClick={() => {
                  dispatch(setCityName(city.Name));
                  
                }}
                className="w-[90%] ms:w-[50%] pb-5 text-center shadow-xl rounded-lg overflow-hidden"
              >
                {/* Meta tags for Individual Cities */}

                <div className="w-full h-[300px] lg:h-[500px] relative overflow-hidden rounded-t-lg">
                  <img
                    src={`${city?.Images[0]}`}
                    className="w-full h-full object-cover rounded-t-lg transition-all duration-1000 ease-in-out hover:scale-105"
                    width="100%"
                    height="300px"
                    loading="lazy"
                    alt={city.Name}
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl pt-2 text-gray-600 hover:text-blue-600 duration-1000 ease-in-out">
                  {city.Name}
                </h2>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitiesScreen;
