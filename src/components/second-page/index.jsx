import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import Photo2 from "../../assets/image/serliqyser.png";
import BlockImage from "../../assets/image/blockimage.jpg";
import PhotoF1 from "../../assets/image/photof1.jpg";
import PhotoGroup1 from "../../assets/image/groupphoto1.JPG";
import PhotoGroup2 from "../../assets/image/groupphoto2.JPG";
import PhotoGroup3 from "../../assets/image/groupphoto3.JPG";
import { ThirdPagePartCalendar } from "../third-page/styled";
import { TextShadow } from "../TextShadow";

export const SecondPage = () => {

  return (
    <SecondPagePart className="mb-10 mt-6">
      <Container>
        <div className="mt-6">
          <TextShadow title="Սիրելի հյուր" />
          <Flexible className="font-[500]">
            <p className="text-[18px]">
              Սիրով հրավիրում ենք ներկա գտնվելու մեր հարսանյաց խնջույքին
              և դառնալու մեր կյանքի օրվա մի մասը։
            </p>
          </Flexible>
        </div>
      </Container>
      <Container>
        <div className="flex h-[100vh] relative gap-[20px] justify-around mt-10">
          <div>
            <img src={Photo2} className="h-[80vh] absolute top-1/2 -translate-y-1/2 right-1/2 -translate-x-1/2" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={PhotoGroup1} alt="" className="h-1/3 object-cover rounded-[10px]" />
            <img src={PhotoGroup2} alt="" className="h-1/3 object-cover rounded-[10px]" />
            <img src={PhotoGroup3} alt="" className="h-1/3 object-cover rounded-[10px]" />
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="mt-10" data-aos="zoom-in">
          Հունիս
        </h2>
        <ThirdPagePartCalendar
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-15"
        >
          {["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"].map((day) => (
            <div
              className="font-bold text-center py-2 mb-3 "
              style={{ fontSize: "16px" }}
            >
              {day}
            </div>
          ))}
          {[...Array(37)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i + 1 == 22 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div className=""></div>
            ),
          )}
        </ThirdPagePartCalendar>
        
        <img src={PhotoF1} alt="" className="rounded-[15px] mt-[50px]" />
      </Container>
    </SecondPagePart>
  );
};
