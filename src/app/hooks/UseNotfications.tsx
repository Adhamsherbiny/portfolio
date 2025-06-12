"use client";
import { useState, useEffect } from "react";
import NotficationComponents from "../components/common/NotficationComponents";

export default function UseNotfications({
  time,
  message,
  type,
}: {
  time: number;
  message: string;
  type: string;
}) {
  const [showNotification, setShowNotification] = useState(false);

  // استخدام useEffect لإغلاق الإشعار بعد الوقت المحدد
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, time);
      return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء التأثير
    }
  }, [showNotification, time]);

  // إرجاع المكون فقط إذا كان showNotification هو true
  const notificationComponent = showNotification ? (
    <NotficationComponents message={message} type={type} />
  ) : null;

  return { showNotification, setShowNotification, notificationComponent };
}
