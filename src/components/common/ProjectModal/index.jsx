import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { saveDataInLocalStorage } from "utils/localStorage";

import IconClose from "../IconClose";
import Input from "../Input";
import Select from "../Select";

const FONTS = [
  "Agenda",
  "Austin",
  "Bluu",
  "Circular",
  "Futura",
  "Gilroy",
  "Helvetica",
  "Montserrat",
  "Recife",
];

const Project = ({ onClose }) => {
  const { setProjectFont, setProjectName } = useBuilderContext();
  const [value, setValue] = useState("");
  const [font, setFont] = useState("");

  const onClick = useCallback(() => {
    if (!value && !font) {
      return;
    }

    if (value) {
      saveDataInLocalStorage("project", value);
      setProjectName(value);
    }

    if (font) {
      saveDataInLocalStorage("font", font);
      setProjectFont(font);
    }

    setValue("");
    onClose();
  }, [font, onClose, setProjectFont, setProjectName, value]);

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;

      if (key === "Enter") {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <ProjectWrapper>
      <CloseButton onClick={onClose}>
        <IconClose />
      </CloseButton>
      <Select
        name="font"
        onChange={(e) => setFont(e.target.value)}
        options={FONTS}
        placeholder="Select a font"
        value={font}
      />
      <Input
        name="project"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a name for your project"
        value={value}
      />
      <CreateButton onClick={onClick}>Update</CreateButton>
    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  align-items: flex-start;
  background-color: #252628;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  left: 10px;
  position: absolute;
  top: 60px;
  width: 250px;
  z-index: 1;

  svg {
    color: #365ed2;
    height: 10px;
    width: 10px;
    margin: 5px;

    &:hover {
      color: lightgray;
    }
  }

  input {
    margin-left: 10px;
    width: calc(100% - 40px);
  }
`;

const CloseButton = styled.div`
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
`;

const CreateButton = styled.div`
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 10px;
  padding: 10px 0;
  text-align: center;
  width: calc(100% - 20px);
  background-color: #d40c0e;

  &:hover {
    background-color: #920e0e;
  }
`;
