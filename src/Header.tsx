import styled from "styled-components";
import { motion } from "framer-motion";
const NavBox = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-top: 2rem;
  background-color: #3f3f3f;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  height: 3rem;
  margin-right: 10rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
`;

const Welcome = styled.div`
  font-size: 1.5rem;
  margin-left: 5rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: rotate(45deg);
  }
`;
const ScrollBtn = styled(motion.div)`
  font-size: 1.1rem;
  cursor: pointer;
  margin: 2rem;
  &:hover {
    transform: rotate(45deg);
  }
`;

function NavBar() {
  return (
    <>
      <NavBox>
        <Welcome>어서오세요</Welcome>
        <Category>
          <ScrollBtn>프로필</ScrollBtn>
          <ScrollBtn>프로젝트</ScrollBtn>
          <ScrollBtn>학습방법</ScrollBtn>
          <ScrollBtn>콘텍트</ScrollBtn>
        </Category>
      </NavBox>
    </>
  );
}

export default NavBar;
