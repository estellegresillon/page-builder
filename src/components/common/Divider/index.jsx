import styled from "styled-components";

const Divider = ({ color }) => <DividerWrapper $color={color} />;

export default Divider;

const DividerWrapper = styled.div`
  background-color: ${({ $color }) => $color};
  height: 5px;
  margin-bottom: 25px;
  width: 100px;
`;
