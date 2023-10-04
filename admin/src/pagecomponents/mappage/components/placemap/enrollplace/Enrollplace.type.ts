export interface EnrollPlacePropsType {
  place: {
    id: string;
    name: string;
    latitude: string;
    longitude: string;
    markerNumber: string;
    type: string;
    content: string;
    imgAddress: string;
  };
  use: 'enroll' | 'update';
}
