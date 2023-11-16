import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";


export default function Home() {
  return (
    <div>
      <div>
        <div
          style={{ height: 250, backgroundColor: "#3982D8" }}
          className="px-5 position-absolute"
        >
          <div class=" text-center  position-relative " style={{ top: 185 }}>
            <div class="row column-gap-5 ">
              <div class="col d-flex align-items-stretch ">
                <div class="card p-3">
                  <div class="card-body">
                    <IoLocationSharp size={45} />
                    <h5 class="card-title">Our Office</h5>
                    <p class="card-text">
                      Banglore World Trade Center,26/1, 22nd Floor,Brigade
                      Gateway, Dr.Rajkumar Road, Malleshwaram Bengaluru-560055
                    </p>
                  </div>
                </div>
              </div>
              <div class="col  align-items-stretch">
                <div class="card p-5">
                  <div class="card-body">
                    <IoCall size={45} />
                    <h5 class="card-title">Phone Number</h5>

                    <p class="card-number">(+91)8861023071</p>
                  </div>
                </div>
              </div>
              <div class="col  align-items-stretch ">
                <div class="card p-5 ">
                  <div class="card-body">
                    <MdEmail size={45} />
                    <h5>Email</h5>
                    <a href="madhvitha.r12@gmail.com">
                      madhvitha.r12@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
