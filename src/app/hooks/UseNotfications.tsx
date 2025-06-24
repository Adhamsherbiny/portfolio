/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import NotficationComponents from "../components/common/NotficationComponents";

interface DataTypeParams {
  time?: number | any;
  message?: string | any;
  type?: string | any;
  show?: boolean;
}

export default function UseNotfications() {
  const [data, setData] = useState<DataTypeParams>();
  // استخدام useEffect لإغلاق الإشعار بعد الوقت المحدد
  useEffect(() => {
    if (data?.show) {
      const timer = setTimeout(() => {
        setData({ show: false });
      }, data.time);
      return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء التأثير
    }
  }, [data?.show, data?.time, data?.message, data?.type]);

  // إرجاع المكون فقط إذا كان showNotification هو true
  const notificationComponent = data?.show ? (
    <NotficationComponents message={data.message} type={data.type} />
  ) : null;

  return {
    data,
    setData,
    notificationComponent,
  };
}
