import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  font-family: 'Lora', serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%; /* Reduced height */
  object-fit: cover;

  @media (min-width: 768px) {
    width: 33.3333%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 497px; /* Reduced height */
  @media (min-width: 768px) {
    width: 66.6667%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
`;

const SharpImage = styled.img`
  width: 100%;
  height: 100%;
  filter: contrast(150%);
  object-fit: cover;
`;

const Banner: FC = () => (
  <Container>
    <Image src="/banner.jpg" alt="banner" />
    <ImageContainer>
      <SharpImage src="/public/banner22.jpg" alt="banner 22" />
      <Overlay>
        <h1 className="text-4xl font-bold mb-1">Don't miss the offer</h1>
        <h2 className="text-3xl font-semibold mb-4">Pick it now</h2>
        <Link
          to="/product/4"
          className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
          data-test="banner-btn"
        >
          Shop Now
        </Link>
      </Overlay>
    </ImageContainer>
  </Container>
);

export default Banner;


