import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { useGetPlacesHook } from '../../../../hooks/useGetPlacesHook';
import { Place } from '../../Map.type';
import Categories from '../categories';
import Sidebar from '../sidebar';
import { useGetCoursesHook } from '../../../../hooks/useGetCoursesHook';
import useCourseStore from '../../../../stores/course/useCourseStore';
const CourseMap = () => {
  const places = useGetPlacesHook();
  const courses = useGetCoursesHook();

  const { selectedCourse } = useCourseStore();

  const [place, setPlace] = useState<Place | null>(null);

  const imageArray = [
    'dino',
    '3d',
    'biking',
    'cafe',
    'baby',
    'food',
    'foodcart',
    'museum',
    'park',
    'plant',
    'play',
    'stroller',
    'toilet',
    'ticket',
    'drawing',
    'bridge',
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Categories></Categories>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Map center={{ lat: 35.057861892100966, lng: 128.39958604747372 }} style={{ width: '100%', height: '100%' }}>
          {places.length > 0 &&
            places.map((place: any) => (
              <MapMarker
                key={place.id}
                position={{ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) }}
                image={{
                  src: `${process.env.REACT_APP_ADMIN_URL}/images/map/markers/${
                    imageArray[place.markerNumber - 1]
                  }.png`,
                  size: {
                    width: 40,
                    height: 40,
                  },
                  options: {
                    offset: {
                      x: 20,
                      y: 20,
                    },
                  },
                }}
                onClick={() => {
                  setPlace({
                    id: place.id,
                    name: place.name,
                    longitude: place.longitude,
                    latitude: place.latitude,
                    markerNumber: place.markerNumber,
                    imgAddress: place.imgAddress,
                    content: place.content,
                    type: place.type,
                  });
                }}
              />
            ))}

          {selectedCourse && (
            <Polyline
              key={selectedCourse.id}
              path={selectedCourse.courseOrderList.map((order: any) => ({
                lat: parseFloat(order.place.latitude),
                lng: parseFloat(order.place.longitude),
              }))}
              strokeColor={'#599198'}
            />
          )}
        </Map>
        <Sidebar place={place} courses={courses}></Sidebar>
      </div>
    </div>
  );
};

export default CourseMap;
