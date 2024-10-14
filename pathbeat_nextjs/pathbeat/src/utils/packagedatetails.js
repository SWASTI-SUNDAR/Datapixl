"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/reduxStoreHooks";
import { setCities } from "../redux-store/slices/citiesSlice";
import { setPackageDetails } from "../redux-store/slices/packageSlice";
import { useFetchCities, useFetchPackageByCityId } from "../hooks/tripHook";
import { useParams } from "next/navigation";

export const useFetchCityAndPackageData = () => {
  // const router = useRouter();
  // console.log(router);
  const params = useParams();
  const dispatch = useAppDispatch();

  // Add this line to ensure the router is ready
  // const isRouterReady = router.isReady;

  const { name } = params; // Get the city name from the query params

  const {
    data: citiesData,
    error: citiesError,
    isLoading: fetchingCitiesData,
  } = useFetchCities();

  const { cities } = useAppSelector((state) => state.citiesSlice);
  const { packageDetails } = useAppSelector((state) => state.packagesSlice);

  const destinations = cities?.filter((city) => city.Status !== 2) || [];

  // Check if router is ready before accessing city name
  const city = destinations.find(
    (city) => city?.Name?.toUpperCase() === name?.toUpperCase()
  );

  const cityId = city?.Uuid;

  const {
    data: packageData,
    error: packageError,
    isLoading: fetchingPackageData,
  } = useFetchPackageByCityId(cityId);

  useEffect(() => {
    if (citiesData?.length > 0 && !citiesError) {
      dispatch(setCities(citiesData));
    }
  }, [citiesData, citiesError, dispatch]);

  useEffect(() => {
    if (packageData && !packageError) {
      dispatch(setPackageDetails(packageData));
    }
  }, [packageData, packageError, dispatch]);

  return {
    fetchingCitiesData,
    fetchingPackageData,
    citiesError,
    packageError,
    cities,
    packageDetails,
  };
};
