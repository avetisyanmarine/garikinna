import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "../../assets/image/srtik.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale contrast-125 brightness-105" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div
            className="mt-7 text-[#ffff] maintext"
            style={{ textShadow: "5px 7px 9px #000" }}
          >
            <div data-aos="fade-up" className="text-center absolute bottom-33">
              <h3>Գարիկ և Իննա</h3>
              <h4>22.06.2026</h4>
            </div>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
