import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  // медіа запити визначені за допомогою react-responsive , допомагає виконати рендер за умовою
  const isMobileScreen = useMediaQuery({ query: "(min-width: 320px)" });
  const isTabletScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletScreenMin = useMediaQuery({ query: "(min-width: 767px)" });
  const isNoteScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isNoteScreenProducts = useMediaQuery({ query: "(max-width: 1023px)" });
  const isDeskScreen = useMediaQuery({ query: "(min-width: 1439px)" });
  return {
    isTabletScreen,
    isNoteScreen,
    isDeskScreen,
    isNoteScreenProducts,
    isMobileScreen,
    isTabletScreenMin,
  };
};

export default useMedia;
