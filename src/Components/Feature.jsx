import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import Slider from "react-slick";

import { getFeatures } from "Utils/Api";
import { FEATURE_URL } from "Constants/Feature";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Feature() {
  const { isLoading, error, data } = useQuery("features", () => getFeatures());

  return (
    <Container>
      {isLoading ? (
        <div>데이터 불러오는 중...</div>
      ) : (
        <Inner>
          <Slider {...settings}>
            {data.map((feature, index) => (
              <img
                key={index}
                src={`${FEATURE_URL}${feature.image}`}
                alt="LOGO"
                width="1200px"
              />
            ))}
          </Slider>
        </Inner>
      )}
      {error && <div>에러발생</div>}
    </Container>
  );
}

export default Feature;

const Container = styled.article`
  display: flex;
  justify-content: center;

  margin-bottom: 40px;
`;

const Inner = styled.div`
  width: 1200px;
`;
