import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
    error: ServerError | null = null;
    getRoadmapVdo: string = '';
    getOutro1Vdo: string = '';
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
    setAppNotLoaded = () => {
        this.appLoaded = false;
    }

    setRoadmapVdo = (blobUrl: string) => {
        this.getRoadmapVdo = blobUrl;
    }

    setOutro1Vdo = (blobUrl: string) => {
        this.getOutro1Vdo = blobUrl;
    }
}