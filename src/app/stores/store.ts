import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import VideoStore from "./videoStore";

interface Store {
  commonStore: CommonStore;
  videoStore: VideoStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  videoStore: new VideoStore('ari_idb')
}

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}