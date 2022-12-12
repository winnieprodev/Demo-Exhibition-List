import React from "react";
import * as Styled from "./content.styled";

const Content = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.Content>
    {children}
  </Styled.Content>
);

export default React.memo(Content);
