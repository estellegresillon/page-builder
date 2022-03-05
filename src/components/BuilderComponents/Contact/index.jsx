import styled from "styled-components";

import IconDribbble from "components/common/IconDribbble";
import IconInstagram from "components/common/IconInstagram";
import IconLinkedIn from "components/common/IconLinkedIn";
import IconMail from "components/common/IconMail";
import IconWorld from "components/common/IconWorld";

const Contact = ({ isInBuilder = false, item, resizeRef }) => {
  const { attributes } = item;

  return (
    <ContactWrapper
      $attributes={attributes}
      $isInBuilder={isInBuilder}
      ref={resizeRef}
    >
      <div className="photo-wrapper">
        <img src="builder/62.jpeg" alt="owner" />
      </div>
      <TextWrapper $attributes={attributes}>
        <div className="contact-title">{attributes.title}</div>
        <div className="contact-content">{attributes.description}</div>
        <div className="contact-links">
          {attributes.mail && (
            <a
              href={`mailto:${attributes.mail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMail />
            </a>
          )}
          {attributes.linkedIn && (
            <a
              href={attributes.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedIn />
            </a>
          )}
          {attributes.instagram && (
            <a
              href={attributes.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram />
            </a>
          )}
          {attributes.dribbble && (
            <a
              href={attributes.dribbble}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDribbble />
            </a>
          )}
          {attributes.other && (
            <a
              href={attributes.other}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWorld />
            </a>
          )}
        </div>
      </TextWrapper>
    </ContactWrapper>
  );
};

Contact.componentName = "Contact";

export default Contact;

const ContactWrapper = styled.div`
  align-items: center;
  background-color: ${({ $attributes }) => $attributes.bgColor};
  display: flex;
  flex-direction: ${({ $attributes }) =>
    $attributes.reversed ? "row-reverse" : "row"};
  min-height: ${({ $attributes }) => `${$attributes.height}px`};
  justify-content: space-evenly;
  padding: 0 10%;
  pointer-events: ${({ $isInBuilder }) => ($isInBuilder ? "none" : "")};
  text-align: center;
  width: 80%;

  .photo-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 50%;

    img {
      border-radius: 50%;
      height: 200px;
      object-fit: cover;
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: ${({ $attributes }) =>
      $attributes.reversed ? "column-reverse" : "column"};
    padding: 5% 10%;

    .photo-wrapper {
      padding: 10%;
      width: 100%;
    }
  }

  body#force-mobile & {
    flex-direction: ${({ $attributes }) =>
      $attributes.reversed ? "column-reverse" : "column"};
    padding: 20% 10%;

    .photo-wrapper {
      padding: 10%;
      width: 100%;
    }
  }
`;

const TextWrapper = styled.div`
  color: ${({ $attributes }) => $attributes.textColor};
  padding: 5%;
  width: 40%;

  .contact-title {
    font-size: 36px;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  .contact-content {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .contact-links {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;

    a {
      color: ${({ $attributes }) => $attributes.textColor};

      &:hover {
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10% 5%;
  }

  body#force-mobile & {
    width: 90%;
    padding: 10% 5%;
  }
`;
