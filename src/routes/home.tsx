import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import TimeLine from "../components/time-line";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;

const Home = () => {
  return (
    <Wrapper>
      <PostTweetForm />
      <TimeLine />
    </Wrapper>
  );
};

export default Home;
