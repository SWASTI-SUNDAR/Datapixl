"use client"
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { useRouter } from "next/router";
import BluePrintWithPoint from "./BluePrintWithPoint";
import LocationAudioPlayer from "./LocationAudioPlayer";
// import { useAppDispatch, useAppSelector } from '../../../hooks/reduxStoreHooks';
import MapButton from "./MapButton";
import AreaNameCards from "./AreaNameCards";
import MonumentEntranceModal from "./MonumentEntranceModal";
// import SignInModal from "../authentications/SignInModal";
useFetchCityAndPackageData 
import LoadingOverlay from "@/components/LoadingOverlay"; 
import { useFetchCityAndPackageData } from "@/utils/packagedatetails";
import { useParams, useRouter } from "next/navigation";

const InsideMonumentScreen = () => {
  // const { isAuthenticated } = useAppSelector(state => state.userSlice);
  const router = useRouter();
  const params = useParams();
    const { name, monumentId } = params;
//   const { name, monumentId } = router.query;
  const { monument } = router.query?.state || {};
  const [selectedAreaId, setSelectedAreaId] = useState(null);
  const [selectedAudioSequence, setSelectedAudioSequence] = useState(0);
  const [isManualSelected, setIsManualSelected] = useState(false);
  const [isMonumentEntranceModalVisible, setIsMonumentEntranceModalVisible] =
    useState(true);

  let newPackageDetails = [];
  let citiesLoadin;
  let packageLoading;

  if (!monument && name) {
    const { packageDetails, fetchingCitiesData, fetchingPackageData } =
      useFetchCityAndPackageData();
    newPackageDetails = packageDetails;
    citiesLoadin = fetchingCitiesData;
    packageLoading = fetchingPackageData;
  }

  const monumentsData = useMemo(() => {
    if (!monument && name) {
      return newPackageDetails?.Cities?.[0]?.Monuments ?? [];
    }
  }, [newPackageDetails]);

  const filteredMonument = monumentsData?.filter(
    (monument) => monument.Uuid === monumentId
  );

  let Monument = monument ? monument : filteredMonument[0];
  const bluePrintUrl = Monument?.BlueprintImageUrl || "";

  // Scroll refs
  const scrollViewRef = useRef(null);
  const scrollViewRefAreaCards = useRef(null);
  const cardPositions = useRef({});
  const scrollAudioRefs = useRef([]);

  const monumentAreas = useMemo(
    () =>
      Monument?.Areas
        ? Monument.Areas.slice().sort((a, b) => a.Sequence - b.Sequence)
        : [],
    [Monument]
  );

  const monumentAudios = useMemo(
    () =>
      Monument?.Content?.Audios
        ? Monument.Content.Audios.slice().sort(
            (a, b) => a.Sequence - b.Sequence
          )
        : [],
    [Monument]
  );

  const allAudios = useMemo(() => {
    const areaAudios = monumentAreas?.flatMap((area) => {
      return (area.Content.Audios ? [...area.Content.Audios] : []).sort(
        (a, b) => a.Sequence - b.Sequence
      );
    });
    return [...monumentAudios, ...areaAudios];
  }, [monumentAreas, monumentAudios]);

  const handleBackButtonClick = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    window.addEventListener("popstate", handleBackButtonClick);
    return () => {
      window.removeEventListener("popstate", handleBackButtonClick);
    };
  }, [handleBackButtonClick]);

  const handleAudioSelection = (Uuid, index) => {
    setIsManualSelected(true);
    const isAreaAudio = allAudios[index].ContentCoverageType === 1;
    setSelectedAudioSequence(index);
    if (!isAreaAudio) {
      setSelectedAreaId(null);
    } else {
      const areaAudioBelongsTo = monumentAreas.find((area) =>
        area.Content.Audios?.some((a) => a.Uuid === Uuid)
      );
      setSelectedAreaId(areaAudioBelongsTo?.Uuid);
    }
  };

  useEffect(() => {
    if (
      selectedAudioSequence >= 0 &&
      scrollViewRef.current &&
      scrollAudioRefs.current[selectedAudioSequence]
    ) {
      const selectedElement = scrollAudioRefs.current[selectedAudioSequence];
      const scrollParent = scrollViewRef.current;

      const offsetTop = selectedElement.offsetTop;
      const scrollParentOffsetTop = scrollParent.offsetTop;

      scrollParent.scrollTo({
        top: offsetTop - scrollParentOffsetTop,
        behavior: "smooth",
      });
    }
    const selectedAreaElement =
      cardPositions.current[allAudios[selectedAudioSequence]?.AreaId];
    if (selectedAreaElement) {
      selectedAreaElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [selectedAudioSequence]);

  const handleAreaSelect = (area) => {
    if (!area) {
      setIsManualSelected(true);
      setSelectedAreaId(null);
      setSelectedAudioSequence(0);
      return;
    }
    setIsManualSelected(true);
    setSelectedAreaId(area.Uuid);
    const index = allAudios.findIndex(
      (audio) => audio.Uuid === area.Content?.Audios?.[0].Uuid
    );
    setSelectedAudioSequence(index);
  };

  if (citiesLoadin || packageLoading) {
    return <LoadingOverlay />;
  }

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {monumentAreas.length > 0 && (
        <div className="overflow-x-auto py-1">
          <div ref={scrollViewRefAreaCards} className="flex space-x-1">
            {monumentAreas.map((area) => (
              <div
                key={area.Uuid}
                id={area.Uuid}
                ref={(el) => (cardPositions.current[area.Uuid] = el)}
              >
                <AreaNameCards
                  isSelected={selectedAreaId === area.Uuid}
                  name={area.Name}
                  sequenceNo={area.Sequence}
                  handleAreaNamePress={() => handleAreaSelect(area)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4">
        {bluePrintUrl ? (
          <div>
            <BluePrintWithPoint
              monumentAreas={monumentAreas}
              selectedAreaId={selectedAreaId}
              handleAreaPress={handleAreaSelect}
              bluePrintUrl={bluePrintUrl}
              entranceCoordinates={{
                x: Monument.EntranceXCoordinate,
                y: Monument.EntranceYCoordinate,
              }}
            />
            {Monument.Lat && Monument.Long && (
              <div className="absolute top-14 right-5">
                <MapButton
                  latLong={{ lat: Monument.Lat, long: Monument.Long }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="relative flex justify-center items-center">
            <img
              src={Monument?.Images?.[0] || "dummyUrl"}
              className="w-full md:w-[40%] object-cover aspect-square"
              alt="Monument Image"
            />
            {Monument?.Lat && Monument?.Long && (
              <div className="absolute top-5 right-5">
                <MapButton
                  latLong={{ lat: Monument?.Lat, long: Monument?.Long }}
                />
              </div>
            )}
          </div>
        )}

        <div className="p-2">
          <div ref={scrollViewRef} className="overflow-y-auto max-h-80">
            {allAudios.map((audio, index) => (
              <div
                key={audio.Uuid}
                ref={(el) => (scrollAudioRefs.current[index] = el)}
                onClick={() => handleAudioSelection(audio.Uuid, index)}
                className={`flex items-center justify-between p-2 my-1 rounded-md shadow-sm ${
                  selectedAudioSequence === index ? "bg-[#E9F2FF]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2 w-3/4">
                  <img
                    src={audio.ThumbnailImageUrl || "dummyUrl"}
                    className="w-10 h-10 rounded-md"
                    alt="Audio Thumbnail"
                  />
                  <div>
                    <p className="text-sm font-semibold">{audio.Name}</p>
                    <p className="text-xs text-gray-500">
                      {audio.Duration} min
                    </p>
                  </div>
                </div>
                <button className="flex justify-center items-center w-8 h-8 bg-[#12273F] rounded-full text-white">
                  ▶
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isMonumentEntranceModalVisible && (
        <div className="sticky bottom-0 w-full bg-white p-4 border-t border-gray-200">
          <LocationAudioPlayer
            isManualSelected={isManualSelected}
            setIsManualSelected={setIsManualSelected}
            allAudios={allAudios}
            selectedAudioSequence={selectedAudioSequence}
            setSelectedAudioSequence={setSelectedAudioSequence}
          />
        </div>
      )}

      <MonumentEntranceModal
        isModalVisible={isMonumentEntranceModalVisible}
        setModalVisible={setIsMonumentEntranceModalVisible}
        entranceAudio={monumentAudios?.find((audio) => audio.IsEntrance)}
      />
      {/* {isAuthenticated === false && <SignInModal />} */}
    </div>
  );
};

export default InsideMonumentScreen;
