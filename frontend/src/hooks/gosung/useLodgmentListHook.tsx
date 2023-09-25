import useGosungListStore from '../../stores/mobilegosung/useGosungListStore';
import lodgmentListGet from '../../apis/lodgment/lodgmentListGet';

export const useLodgmentListHook = () => {
  // const [restaurantList, setRestaurantList] = useState([]);
  const lodgment = useGosungListStore((state: any) => state.lodgment);
  const setLodgment = useGosungListStore((state: any) => state.setLodgment);
  const getlodgmentList = async () => {
    const res = await lodgmentListGet();
    setLodgment(res.data.response);
  };
  return { getlodgmentList };
};
