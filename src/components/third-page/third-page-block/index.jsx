import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";
import Arrow from "../../../assets/image/arrow.png";

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
  line,
  imageSize,
}) => {
  return (
    <>
      <ThirdPageBlockPart
        style={{ marginTop: uniqueMargin ? `${uniqueMargin}px` : "" }}
      >
        <ThirdPageBlockPartSvg line={line}>
          <img loading="lazy" src={ImageSrc} width={imageSize} />
        </ThirdPageBlockPartSvg>
        <ThirdPagePartContext data-aos="fade-up">
          <h3>{number}</h3>
          <h3>{bigText}</h3>
          <p>{smallText}</p>
        </ThirdPagePartContext>
        {!line && <img src={Arrow} className="mb-5" />}
      </ThirdPageBlockPart>
    </>
  );
};
