export interface Video {
  id: string;
  src: string;
}

export class Video implements Video {
  constructor(init?: VideoFormValues) {
    Object.assign(this, init);
  }
}

export class VideoFormValues {
  id?: string = undefined;
  src: string = '';

  constructor(video?: VideoFormValues) {
    if (video) {
      this.id = video.id;
      this.src = video.src;
    }
  }
}