import styled from "styled-components";

const Notification = ({ text }) => (
  <NotificationWrapper>{text}</NotificationWrapper>
);

export default Notification;

const NotificationWrapper = styled.div`
  animation: 4s fadeInOut;
  animation-fill-mode: forwards;
  background: #d40c0c;
  border-radius: 3px;
  bottom: 20px;
  color: white;
  font-weight: bolder;
  padding: 20px 30px;
  position: fixed;
  right: 20px;

  @keyframes fadeInOut {
    from {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
