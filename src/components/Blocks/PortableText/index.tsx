/* eslint-disable react/forbid-prop-types */
import { portableTextComponents } from "@/clientLibs/portableText";
import { PortableText } from "@portabletext/react";
import { useMemo } from "react";
import { TypedObject } from "sanity";

type Props = {
  value: any[];
};

export function ProseableText({ value = [] }: Props) {
  const valueGroups = useMemo(
    () =>
      value.reduce(
        (accumulator, item) => {
          const lastIndex = accumulator.length - 1;

          if (
            accumulator[lastIndex].length === 0 ||
            accumulator[lastIndex][0]._type === item._type
          ) {
            accumulator[lastIndex].push(item);
          } else {
            accumulator.push([item]);
          }

          return accumulator;
        },
        [[]]
      ),
    [value]
  );
  if (!valueGroups?.[0]?.length) return null;

  return (
    <div className="portableText">
      {!!valueGroups?.length &&
        valueGroups?.map((group: TypedObject, index: number) => (
          <PortableText key={index} value={group} components={portableTextComponents} />
        ))}
    </div>
  );
}
