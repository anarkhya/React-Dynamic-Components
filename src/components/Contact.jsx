import React from "react";
import ButtonAdmin from "./ButtonAdmin";

const Contact = ({ data }) => {
  return (
    <div className="">
      <div className={data.cls}>
        <div className="text-right w-full">
          <ButtonAdmin type="contact" />
        </div>
        <h1 className="text-center text-h1 font-light">{data.title}</h1>
        <div className="md:w-1/2 flex justify-between flex-col md:flex-row">
          <div className="flex w-64 md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p>{data.phone}</p>
          </div>
          <div className="flex w-64 md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <p>{data.mail}</p>
          </div>
          <div className="flex w-64 md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g id="surface11129590">
                <path d="M 8 3 C 5.238281 3 3 5.238281 3 8 L 3 16 C 3 18.761719 5.238281 21 8 21 L 16 21 C 18.761719 21 21 18.761719 21 16 L 21 8 C 21 5.238281 18.761719 3 16 3 Z M 18 5 C 18.550781 5 19 5.449219 19 6 C 19 6.550781 18.550781 7 18 7 C 17.449219 7 17 6.550781 17 6 C 17 5.449219 17.449219 5 18 5 Z M 12 7 C 14.761719 7 17 9.238281 17 12 C 17 14.761719 14.761719 17 12 17 C 9.238281 17 7 14.761719 7 12 C 7 9.238281 9.238281 7 12 7 Z M 12 9 C 10.34375 9 9 10.34375 9 12 C 9 13.65625 10.34375 15 12 15 C 13.65625 15 15 13.65625 15 12 C 15 10.34375 13.65625 9 12 9 Z M 12 9 " />
              </g>
            </svg>

            <p>{data.insta}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
