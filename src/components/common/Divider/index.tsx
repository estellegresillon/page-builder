import styled from 'styled-components';

const Divider = ({ color = 'gray' }: { color?: string }): JSX.Element => (
  <DividerWrapper $color={color} />
);

export default Divider;

const DividerWrapper = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  height: 5px;
  margin-bottom: 25px;
  width: 100px;
`;
