import React, {
  useEffect,
  useState,
} from 'react';
import Layout from '../_layout/Layout';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import LoadingBar from '../_common/components/LoadingBar';
import ScreeningPage from './ScreeningPage';


const Screening = () => {
  const [serviceOrders, setServiceOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgerssLoad] = useState(0);

  const getData = () => {
    if (loadingData) {
      setProgerssLoad(80);
      getAllServiceOrder()
        .then((result) => {
          setProgerssLoad(80);
          setServiceOrders(result);
          setLoadingData(false);
        });
    }
  };

  useEffect(getData, [getData]);

  const reloadData = () => {
    setLoadingData(true);
    getData();
  };

  if (loadingData) {
    return <LoadingBar progress={progressLoad} />;
  }

  return (
    <Layout>
      <ScreeningPage
        serviceOrders={serviceOrders}
        reloadData={reloadData}
        loadingData={loadingData}
      />
    </Layout>
  );
};

export default Screening;
