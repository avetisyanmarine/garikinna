import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.jpg";
import Table from "../../assets/image/table.png";
import PhotoF2 from "../../assets/image/photof2.jpg";
import Bant from "../../assets/image/bant.png";
import AttendanceGuests from "./../AttendanceGuests/index";
import LineAes from "../../assets/image/lineaes.png";
import { GridDiv } from "../second-page/styled";
import { useEffect, useState } from "react";

export const ForthPage = () => {
  const weddingDate = new Date(2026, 4, 26, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Աննա եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/s5K49c9MwQWN15yVA"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Հրաշք Այգի Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/yAn5cZ9vT1ULbuNG7"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={LineAes} alt="" className="w-full" />

      <div className="text-center mt-14">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ և անսահման դրական էմոցիաներ. ինչպես նաև հարմարավետ
          կոշիկներ` պարելու համար:
          <br />
          Խնդրում ենք հիշել, որ այդ օրը սպիտակ զգեստ պետք է կրի միայն հարսիկը,
          քանի որ նրա օրն է
          <br />
          <br />
          Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
          իրենց բալիկների նկատմամբ, քանի որ նրանք չգիտակցված, բայց կարող են
          փչացնել մեր հիշարժան պահերը։
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <div className="text-center">
          <img src={PhotoF2} alt="" className="mb-10 rounded-[15px]" />
          <h2 style={{ fontSize: "28px" }} className="mb-5" data-aos="zoom-in">
            Միջոցառմանը մնաց
          </h2>
          <GridDiv>
            <Flexible data-aos="flip-up">
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible
              className="uniqueBorder"
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="750"
            >
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վրկ</p>
            </Flexible>
          </GridDiv>
          <hr className="mb-10" />
        </div>
        <AttendanceGuests />
        <div className="flex flex-col items-center my-5">
          <img data-aos="fade-right" src={Table} alt="Photo 1" />

          <a
            href={Table}
            download="table.jpg"
            className="px-6 py-2 bg-[#1e1e1e] text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-md flex items-center gap-2"
          >
            <span>Ներբեռնել</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </Container>
    </ForthPagePart>
  );
};
