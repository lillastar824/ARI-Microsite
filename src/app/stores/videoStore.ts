import { makeAutoObservable, reaction } from "mobx";
import { Video } from "../models/video";

const VIDEOS = [
  { id: 'firstIntroVideo', src: 'assets/video/SILOFICATION_Preroll_Teaser1.mp4' },
  { id: 'roadMapVideo', src: 'assets/video/road_map.mp4' },
  { id: 'subVideo1', src: 'assets/video/SILOFICATION_Preroll_Teaser1.mp4' },
  { id: 'subVideo2', src: 'assets/video/SILOFICATION_Preroll_Teaser1.mp4' },
  { id: 'subVideo3', src: 'assets/video/SILOFICATION_Preroll_Teaser1.mp4' },
  { id: 'subVideo4', src: 'assets/video/SILOFICATION_Preroll_Teaser1.mp4' }
];

export default class VideoStore {
  loading = false;
  loadingInitial = false;
  selectedVideo: Video | undefined = undefined;
  videoRegistry = new Map<string, Video>();
  predicate = new Map().set('all', true);

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.predicate.keys(),
      () => {
        this.videoRegistry.clear();
        this.loadVideos();
      }
    )
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  }

  loadVideos = async () => {
    this.loadingInitial = true;
    try {
      VIDEOS.forEach(video => {
        this.setVideo(video);
      })
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  loadVideo = async (id: string) => {
    let video = this.getVideo(id);
    if (video) {
      this.selectedVideo = video;
      return video;
    }
  }

  private setVideo = (video: Video) => {
    this.videoRegistry.set(video.id, video);
  }

  private getVideo = (id: string) => {
    return this.videoRegistry.get(id);
  }

}