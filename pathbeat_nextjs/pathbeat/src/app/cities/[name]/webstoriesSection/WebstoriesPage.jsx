import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchCityAndPackageData } from '../../utils/packagedatetails';
import Navbar from '../../components/Navbar';
import LoadingOverlay from '../../components/LoadingOverlay';

const ToDoThingsPage = () => {
  const { name } = useParams();
  const location = useLocation();

  const [dimensions, setDimensions] = useState(window.innerWidth);
  const { webstories: locationWebStories } = location.state || [];

  let newPackageDetails = [];
 let citiesLoading;
  let packagedatetailsFetching;
  if (!locationWebStories && name) {
    const { packageDetails, fetchingCitiesData, fetchingPackageData } =
      useFetchCityAndPackageData();
    newPackageDetails = packageDetails;
    citiesLoading = fetchingCitiesData;
    packagedatetailsFetching = fetchingPackageData;
  }
  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const monumentsData = React.useMemo(() => {
    if (!locationWebStories && name) {
      return newPackageDetails?.Cities?.[0]?.Monuments ?? [];
    }
  }, [newPackageDetails]);

  const webstories = React.useMemo(() => {
    if (!locationWebStories && name) {
      const stories = newPackageDetails?.Cities?.[0]?.Content?.Webstories || [];
      monumentsData.forEach((monument) => {
        if (monument?.Content?.Webstories) {
          stories.push(...monument.Content.Webstories);
        }
      });
      return stories;
    }
  }, [monumentsData, newPackageDetails]);

  const displayWebStories =
    locationWebStories?.length > 0 ? locationWebStories : webstories;
  const handlewebstoryClicked = (webstory) => {
    if (webstory?.Url) {
      window.open(webstory?.Url, '_blank');
    }
  };

   if (citiesLoading || packagedatetailsFetching) {
    return <LoadingOverlay />;
  }
  return (
    <div className="w-full bg-[#FAFAFA]">
      <Navbar />
      <div className="w-full sm:w-[90%] lg:w-[80%] py-5 px-4 m-auto min-h-screen">
        <div className="py-5 px-2.5 justify-center items-center bg-[#FAFAFA]">
          <div className="grid gap-3 grid-cols-2">
            {displayWebStories?.map((webstory, index) => (
              <div
                key={webstory.Uuid}
                onClick={() => handlewebstoryClicked(webstory)}
                className={`rounded-lg shadow-custom-opacity overflow-hidden relative cursor-pointer sm:h-72 ${index === displayWebStories.length - 1 ? 'col-span-2' : ''}`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={webstory.ThumbnailImageUrl || dummyImgUrl}
                  alt={webstory.Name}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 text-[#fff] text-center p-2.5 sm:p-3">
                  <p className="text-sm font-ibm font-medium">
                    {webstory.Name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoThingsPage;
