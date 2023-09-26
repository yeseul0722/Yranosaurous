export type PositionType =
  | {
      lat: number;
      lng: number;
    }
  | undefined;

export interface Festival {
  id: number;
  name: string;
  startTime: string;
  placeName: string;
}

export interface Place {
  id: number;
  name: string;
  longitude: string;
  latitude: string;
  markerNumber: number;
  imgAddress: string;
  content: string;
  type: string;
}

export interface EnrollShowPropsType {
  place: Place | null;
  festivals: Festival[];
}
