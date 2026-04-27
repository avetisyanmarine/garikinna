import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={50}
            ImageSrc={null}
            number={"10:30"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            smallText="Սողոմոն Տարոնցու 1նրբանցք 4րդ շենք"
          />
          <ThirdPageBlock
            uniqueMargin={10}
            imageSize={100}
            ImageSrc={Haverjutyun}
            number={"12:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="Ոսկանյան 45\1 տուն"
          />
          <ThirdPageBlock
            imageSize={100}
            ImageSrc={Church}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Աննա եկեղեցի"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={90}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Հրաշք Այգի Ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          <h3>Սիրով սպասում ենք</h3>
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
