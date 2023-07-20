import React from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  is_checked?: boolean;
  css_overwrite?: React.CSSProperties;
}

const Navtab = ({ text, is_checked, css_overwrite, ...rest }: IProps) => {
  return (
    <S
      className={`${!!is_checked && "is_checked"}`}
      style={{
        ...css_overwrite,
      }}
      {...rest}
    >
      {text}
    </S>
  );
};

export default Navtab;

const S = styled.button`
  padding: 0px 4px;
  &.is_checked {
    color: red;
  }
`;
