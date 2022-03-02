import styled from "styled-components";

const Empty = ({ text }) => <EmptyWrapper>{text}</EmptyWrapper>;

export default Empty;

const EmptyWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50vh;
  justify-content: center;
  position: relative;
  width: 100%;
`;
