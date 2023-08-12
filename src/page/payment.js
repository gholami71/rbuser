import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    // دریافت اطلاعات ارسالی از صفحه اول
    const receivedData = location.state;

    // انجام عملیات مورد نیاز با اطلاعات دریافتی
    console.log('اطلاعات دریافتی:', receivedData);
  }, [location]);

  return (
    <div>
      {paymentData ? (
        <div>
ssss
        </div>
      ) : (
        <p>Loading payment data...</p>
      )}
    </div>
  );
};

export default Payment;
