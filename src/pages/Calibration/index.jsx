import React, { useState } from 'react';
import LoadingBar from '../_common/components/LoadingBar';
import { ServiceOrder } from '../../models/serviceOrder';
import CalibrationPage from './CalibrationPage';
import Layout from '../_layout/Layout';
import getAllDiagnosis from '../../modelServices/diagnosisService';
import { getAllCalibration } from '../../modelServices/calibragemService';


export default function IndexCalibration() {
  const [serviceOrders, setServiceOrder] = useState([]);
  const [requestBlock, setRequestBlock] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [progress, setProgress] = useState(0);

  function getData() {
    setLoadingData(true);
    setProgress(40);
    getAllDiagnosis
      .then((orderDiagnosis) => {
        setProgress(80);
        getAllCalibration()
          .then((orderCalibrated) => {
            setServiceOrder([
              ...orderDiagnosis.map((item) => ({
                ...ServiceOrder(item),
                ...item,
                equipamento: item.equipamento,
              })) || [],
              ...orderCalibrated.map((item) => ({
                ...ServiceOrder(item),
                equipamento: item.equipamento,
              })) || [],
            ].sort((a, b) => a.created_at.$date - b.created_at.$date));
          });
      })
      .finally(() => {
        setProgress(100);
        setLoadingData(false);
      });
  }

  if (!requestBlock) {
    setRequestBlock(true);
    getData();
  }

  async function reloadData() {
    await setRequestBlock(false);
  }

  if (loadingData) {
    return <LoadingBar progress={progress} />;
  }

  return (
    <>
      <Layout>
        <CalibrationPage serviceOrders={serviceOrders} reloadData={reloadData} />
      </Layout>
    </>
  );
}
