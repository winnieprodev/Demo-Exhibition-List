import { ExhibitionData } from "models";
import * as Styled from "./exhibitionItem.styled";

interface OwnProps {
  info: ExhibitionData;
}

const ExhibitionItem: React.FC<React.PropsWithChildren<OwnProps>> = ({
  info,
}) => {

  return (
    <Styled.TR key={info.id} $closed={info.status === "Closed"}>
      <td><Styled.Detail>{info.title}</Styled.Detail></td>
      <td><Styled.Detail>{info.description || info.short_description}</Styled.Detail></td>
      <td>{info.is_featured ? 'Yes' : 'No'}</td>
      <td>{info.gallery_title}</td>
      <td>{info.type}</td>
    </Styled.TR>
  );
};

export default ExhibitionItem;
