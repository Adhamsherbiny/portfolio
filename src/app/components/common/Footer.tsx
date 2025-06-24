import { faEnvelope, faSignature } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link
              className="acc-logo"
              href={"mailto:=Adhamsherbiny.business@hotmail.com"}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
          <li>
            <Link
              className="acc-logo"
              target="_blank"
              href={"https://github.com/Adhamsherbiny"}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link className="acc-logo" href={"tel:01148094858"}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>© 2025 All Rights Reserved</p>
        <div className="name">
          <FontAwesomeIcon icon={faSignature} />
          Adham Sherbiny
        </div>
      </div>
    </footer>
  );
}
