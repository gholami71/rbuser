import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const [paymentData, setPaymentData] = useState(null);

  useLayoutEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const refid = urlParams.get('refid');
    const clientrefid = urlParams.get('clientrefid');
    const cardnumber = urlParams.get('cardnumber');
    const cardhashpan = urlParams.get('cardhashpan');

    // تنظیم اطلاعات در وضعیت محلی
    setPaymentData({
      code,
      refid,
      clientrefid,
      cardnumber,
      cardhashpan,
    });
  }, [location]);

  return (
    <div>
      {paymentData ? (
        <div>
          <h2>Payment Data:</h2>
          <p>Code: {paymentData.code}</p>
          <p>RefID: {paymentData.refid}</p>
          <p>ClientRefID: {paymentData.clientrefid}</p>
          <p>Card Number: {paymentData.cardnumber}</p>
          <p>Card Hash PAN: {paymentData.cardhashpan}</p>
        </div>
      ) : (
        <p>Loading payment data...</p>
      )}
    </div>
  );
};

export default Payment;
