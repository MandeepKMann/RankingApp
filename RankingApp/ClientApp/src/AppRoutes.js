import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer.js";
import FamousRaccoonImageArray from "./components/FamousRaccoonImages.js";
import LocalRaccoonImageArray from "./components/LocalRaccoonImages.js"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/rank-famous',
    element: <RankItemsContainer dataType={1} imgArr={FamousRaccoonImageArray} />
  },
  {
    path: '/rank-local',
    element: <RankItemsContainer dataType={2} imgArr={LocalRaccoonImageArray} />
  }
];

export default AppRoutes;
