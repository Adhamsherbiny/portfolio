/* eslint-disable @next/next/no-img-element */
import "@/app/styles/main.scss";
export default function NotficationComponents({
  message,
  type,
}: {
  message: string;
  type: string;
}) {
  return (
    <div className="notification">
      <div className="logo">
        <img
          className="img"
          src="/bird-prey_15707391.png"
          alt="Notfication logo"
        />
      </div>
      <div className="body">
        <p className="type">{type}</p>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}
