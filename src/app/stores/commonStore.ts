import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
    error: ServerError | null = null;
    getRoadmapVdo: string = '';
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);
    }

    setServerError = (error: ServerError) => {
        this.error = error;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

    setRoadmapVdo = (blobUrl: string) => {
        this.getRoadmapVdo = blobUrl;
    }
}