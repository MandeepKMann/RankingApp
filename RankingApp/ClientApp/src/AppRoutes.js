import { Counter } from "./components/Counter";
import FamousRaccoonImageArray from "./components/FamousRaccoonImages.js";
import LocalRaccoonImageArray from "./components/LocalRaccoonImages.js"
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer.js";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
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
