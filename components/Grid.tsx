import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GridItems } from "@/data/GridItems";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {GridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
