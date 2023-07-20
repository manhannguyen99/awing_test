import React from "react";
import { styled } from "styled-components";

type TProps = {
  label: string;
  name_key: string;
  children: React.ReactNode;
  error?: boolean;
};

const FormInput = ({ label, name_key, children, error }: TProps) => {
  return (
    <S>
      <span className="label">{label}</span>
      {children}
      {error && <p>Error</p>}
    </S>
  );
};

export default FormInput;

const S = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  p {
    color: red;
  }
  &:not(&:first-child) {
    margin-top: 4px;
  }

  .label {
    min-width: 80px;
  }
`;
