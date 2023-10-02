export interface RefreshCoursesType {
  shouldRefresh: boolean;
  showMarker: boolean;
  toggleRefresh: () => void;
  setShowMarker: () => void;
  setNoShowMarker: () => void;
}
