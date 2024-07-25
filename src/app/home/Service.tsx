import React from 'react'
import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({ subsets: ["latin"] });

interface idProps {
  id: string;
}

function Service({ id }: idProps) {
  return (
    <div id={id}>
        <div className="h-[480px] bg-[#465C50] px-[80px]">
        <span
          className={`${noto.className} flex h-[220px] w-auto justify-center px-[60px] py-[50px] text-center text-[60px] text-white`}
        >
          Service & Facilities
        </span>
        <div>
          <ul className="flex items-center justify-around text-white">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22q-1.825-.225-3.625-.987t-3.212-2.188t-2.288-3.6T2 10V9h1q1.275 0 2.625.325t2.525.975q.3-2.15 1.363-4.413T12 2q1.425 1.625 2.488 3.888T15.85 10.3q1.175-.65 2.525-.975T21 9h1v1q0 3.05-.875 5.225t-2.287 3.6t-3.2 2.188T12 22m-.05-2.05q-.275-4.15-2.463-6.275T4.05 11.05q.275 4.275 2.538 6.375t5.362 2.525M12 13.6q.375-.55.913-1.137t1.037-1.013q-.05-1.425-.562-2.975T12 5.45q-.875 1.475-1.388 3.025t-.562 2.975q.5.425 1.05 1.013T12 13.6m1.95 5.9q.925-.3 1.925-.875t1.863-1.562t1.475-2.463t.737-3.55q-2.35.35-4.125 1.563T13.1 15.7q.3.8.513 1.75t.337 2.05M12 22"
                ></path>
              </svg>
              <li>Spa</li>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"
                ></path>
              </svg>
              <li>Sauna</li>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="M14.5 7v1h-1v2h-1v1H11V8H4v3H2.5v-1h-1V8h-1V7h1V5h1V4H4v3h7V4h1.5v1h1v2Z"
                ></path>
              </svg>
              <li>Fitness</li>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.39 24.35H23a1 1 0 0 1 1 1v5h0H8.38h0v-5a1 1 0 0 1 1.01-1"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.38 25.36V15.28a1.41 1.41 0 0 1 1.41-1.41h12.8A1.41 1.41 0 0 1 24 15.28v10.08m0 0V15.28a1.41 1.41 0 0 1 1.41-1.41h12.8a1.41 1.41 0 0 1 1.41 1.41v10.08M5.36 19.57h2.16a.86.86 0 0 1 .86.86v10h0h-2.81a1.07 1.07 0 0 1-1.07-1.1v-8.9a.86.86 0 0 1 .86-.86m37.07 10.84h-2.81h0v-10a.86.86 0 0 1 .86-.86h2.16a.86.86 0 0 1 .86.86v8.9a1.07 1.07 0 0 1-1.07 1.07Z"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M25 24.35h13.61a1 1 0 0 1 1 1v5h0H24h0v-5a1 1 0 0 1 1-1M8.38 30.41h3.07v3.73H8.38zm28.17 0h3.07v3.73h-3.07z"
                ></path>
              </svg>
              <li>Arrival Lounge</li>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"
                ></path>
              </svg>
              <li>Free Wifi</li>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M29 1075q-29 64-29 133v72q0 38 10 73t30 65t48 54t62 40q15 35 39 63t55 47t66 31t74 11q69 0 128-34t94-94h708q35 60 94 94t128 34t128-34t94-94h162q27 0 50-10t40-27t28-41t10-50v-256q0-79-30-149t-82-122t-122-83t-150-30h-37l-328-328q-27-27-62-41t-74-15H256v128h29zm1507 461q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10M896 512h267q26 0 45 19l237 237H896zM768 768H309l99-219q8-17 24-27t35-10h301zm-384 768q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10"
                ></path>
              </svg>
              <li>Parking</li>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"
                ></path>
              </svg>
              <li>24 hours operation</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service