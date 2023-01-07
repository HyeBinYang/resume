import React from "react";
import { Flex } from "./style";

const Experience = () => {
  return (
    <section>
      <h2 css={{ color: "rgba(51, 126, 169, 1)" }}>Experience</h2>
      <div>
        <Flex alignItems="center" gap={12}>
          <img
            css={{
              width: "30px",
              height: "30px",
            }}
            src="https://picsum.photos/200/300"
            alt=""
          />
          <h3
            css={{
              fontSize: "1.5em",
            }}
          >
            약문약답
          </h3>
        </Flex>
      </div>
    </section>
  );
};

export default Experience;
