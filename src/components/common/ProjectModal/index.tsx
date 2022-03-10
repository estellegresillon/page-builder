import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useBuilderContext } from 'contexts';
import { saveDataInLocalStorage } from 'utils/localStorage';

import IconClose from '../IconClose';
import Input from '../Input';
import Select from '../Select';

const FONTS = [
  'Agenda',
  'Austin',
  'Bluu',
  'Circular',
  'Futura',
  'Gilroy',
  'Montserrat',
  'Recife',
];

const Project = ({ onClose }: { onClose: () => void }): JSX.Element => {
  const {
    transparentMenu,
    projectFont,
    projectName,
    setTransparentMenu,
    setProjectFont,
    setProjectName,
  } = useBuilderContext();

  const updateFont = (font: string) => {
    if (font) {
      saveDataInLocalStorage('font', font);
      setProjectFont(font);
    }
  };

  const updateTransparentMenu = () => {
    const newMenu = transparentMenu === 'true' ? 'false' : 'true';
    saveDataInLocalStorage('transparentMenu', newMenu);
    setTransparentMenu(newMenu);
  };

  const updateProjectName = (name: string) => {
    saveDataInLocalStorage('project', name);
    setProjectName(name);
  };

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;

      if (key === 'Enter') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <ProjectWrapper>
      <CloseButton onClick={onClose}>
        <IconClose />
      </CloseButton>
      <div className="menu-style">
        <label htmlFor="menu">Light Menu</label>
        <input
          id="menu"
          onChange={updateTransparentMenu}
          type="checkbox"
          checked={transparentMenu === 'true'}
        />
      </div>
      <Select
        name="font"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          updateFont(e.target.value)
        }
        options={FONTS}
        placeholder="Select a font"
        value={projectFont}
      />
      <Input
        name="project"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateProjectName(e.target.value)
        }
        placeholder="Enter a name for your project"
        value={projectName}
      />
      <UpdateButton onClick={onClose}>Done</UpdateButton>
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

  .menu-style {
    cursor: pointer;
    margin: 19px;
    margin-top: 0;
    white-space: nowrap;

    input,
    label {
      cursor: pointer;
      width: auto;
    }
  }

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

const UpdateButton = styled.div`
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
