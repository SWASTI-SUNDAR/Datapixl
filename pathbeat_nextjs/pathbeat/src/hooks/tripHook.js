import { useQuery } from 'react-query';
import { fetchCities, fetchPackageByCityId } from '../utils/tripApis';

const useFetchCities = () => {
  return useQuery(['cities'], () => fetchCities(), {
    keepPreviousData: true,
    staleTime: 3600000,
    refetchOnReconnect: true,
  });
};
//d9978ba4-c66e-4df0-a5cb-fb0bc0196ae0

const useFetchPackageByCityId = (cityId) => {
  return useQuery(['package', cityId], () => fetchPackageByCityId(cityId), {
    enabled: !!cityId && cityId !== '', // call when id is being passed
    keepPreviousData: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });
};
export { useFetchCities, useFetchPackageByCityId };
