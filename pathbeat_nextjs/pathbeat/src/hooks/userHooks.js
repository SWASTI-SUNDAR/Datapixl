import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchUserLocalData, validateUserToken } from '../utils/userApis';

const useValidateToken = () => {
  const queryClient = useQueryClient();

  return useMutation(validateUserToken, {
    onSuccess: (result) => {
      //console.log('result in validate==>',result)
      if (result?.data) {
        queryClient.setQueryData(['userTokenValidation'], result?.data);
      } else if (result?.error) {
        queryClient.setQueryData(['userTokenValidation'], {
          error: result?.error,
        });
      }
    },

    onError: (error) => {
      queryClient.setQueryData(['userTokenValidation'], {
        error: error.message,
      });
    },
  });
};

const useFetchUserLocalData = () => {
  return useQuery('userData', fetchUserLocalData, {
    staleTime: 3600000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
  });
};

export { useValidateToken, useFetchUserLocalData };
