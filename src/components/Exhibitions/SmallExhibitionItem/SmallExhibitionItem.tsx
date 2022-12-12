import { ExhibitionData } from "models";
import * as Styled from "./smallExhibitionItem.styled";

interface OwnProps {
  data: ExhibitionData;
}

const SmallExhibitionItem: React.FC<React.PropsWithChildren<OwnProps>> = ({
  data,
}) => {

  return (
    <Styled.Card $closed={data.status === "Closed"}>
      <Styled.Section>
          <Styled.Title>Title</Styled.Title>
          <Styled.Detail>{data.title}</Styled.Detail>
      </Styled.Section>
      <Styled.Section>
          <Styled.Title>Description</Styled.Title>
          <Styled.Detail>{data.description || data.short_description}</Styled.Detail>
      </Styled.Section>
      <Styled.Section>
          <Styled.Title>Is Featured</Styled.Title>
          <Styled.Detail>{data.is_featured ? 'Yes' : 'No'}</Styled.Detail>
      </Styled.Section>
      <Styled.Section>
          <Styled.Title>Gallery Title</Styled.Title>
          <Styled.Detail>{data.gallery_title}</Styled.Detail>
      </Styled.Section>
      <Styled.Section>
          <Styled.Title>Type of Exhibition</Styled.Title>
          <Styled.Detail>{data.type}</Styled.Detail>
      </Styled.Section>
  </Styled.Card>
  );
};

export default SmallExhibitionItem;
