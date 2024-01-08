import React from "react";
import styled from "styled-components/native";
import { QuickAccessButton } from "../atoms/QuickAccessButton";

export interface QuickAccessOptionProps {
  label: string;
  iconName: string;
}

export const QuickAccessOption = ({
  label,
  iconName,
}: QuickAccessOptionProps) => {
  return (
    <QuickAccessOptionArea>
      <QuickAccessButton iconName={iconName} />
      <Label>{label}</Label>
    </QuickAccessOptionArea>
  );
};

const QuickAccessOptionArea = styled.View`
  width: 90px;
  width: 90px;
  height: 100px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 50px;
  text-align: center;
`;

const Label = styled.Text`
  width: 80%;
  font-size: 10px;
  color: #fff;
  margin-top: 5px;
  text-align: center;
`;
