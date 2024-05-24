import React from "react";

import { socialIcons } from "./Data";
import { team } from "./Data";
import Person2 from "./Assests/images/Person2.jpg";


export default function Teams() {
  return (
    <>
    <div>
    <h2>Our Team</h2>
          <div className="row g-4">
            {team.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={Person2.jpg} alt="img" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      {socialIcons.slice(0, 3).map((val, index) => (
                        <a
                          className="btn btn-square btn-primary mx-1"
                          href=""
                          key={index}
                        >
                          {val.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small>{item.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          </div>
    </>
  );
}