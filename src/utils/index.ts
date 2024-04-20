import { Metadata } from "next";
import { METADATA } from "./contants";

export const getMetadata = (
  title: string,
  others: Partial<Metadata> = {},
): Metadata => {
  return {
    ...METADATA,
    title: title || METADATA.title,
    ...others,
  };
};
