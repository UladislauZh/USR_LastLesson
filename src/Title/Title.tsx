import React from "react";
import { numbers } from "../App";

type TitlePropsType = {
  inc: number;
};

export const Title = ({ inc }: TitlePropsType) => {
  return (
    <h2 className={inc < numbers.length - 1 ? "title" : "redTitle"}>{inc}</h2>
  );
};
