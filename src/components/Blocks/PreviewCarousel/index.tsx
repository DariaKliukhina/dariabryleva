"use client";
import React, { useState } from "react";
import "@mantine/carousel/styles.css";
import { Carousel, Embla } from "@mantine/carousel";
import { ExperienceItemPreview } from "../ExperienceItemPreview";
import { Box, rem } from "@mantine/core";
import classes from "./PreviewCarousel.module.css";
import { LanguagesTypes, PositionRaw } from "@/types";

type PreviewCarouselProps = {
  list: PositionRaw[];
  locale: LanguagesTypes;
  locales: { present: string };
};

export const PreviewCarousel = ({
  list,
  locale,
  locales,
}: PreviewCarouselProps) => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const slideChange = (slide: number) => {
    if (slide > 0) {
      if (isStart) {
        setIsStart(false);
      }
      const slidesInView = embla?.slidesInView();
      if (slidesInView?.includes(list.length-1)) {
        setIsEnd(true);
      } else {
        if (isEnd) {
          setIsEnd(false);
        }
      }
    } else {
      setIsStart(true);
    }
  };

  return (
    <Box className={`${classes.listWrapper} ${isStart && classes.start} ${isEnd && classes.end}`}>
      <Carousel
        slideSize="auto"
        align="start"
        slideGap={rem(18)}
        withIndicators={false}
        withControls={false}
        containScroll="trimSnaps"
        onSlideChange={slideChange}
        getEmblaApi={setEmbla}
      >
        {list?.map((item) => (
          <Carousel.Slide
            key={`${item?.company?.companyName}-${item.position}`}
          >
            <ExperienceItemPreview
              position={item}
              locale={locale}
              locales={locales}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};
