import styled from 'styled-components';

import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';

const NAME: { [key: string]: string } = {
  hasColGap: 'Column gap',
  hasSectionGap: 'Section gap',
  reversed: 'Reversed layout',
};

type CheckBoxProps = {
  attributeKey: string;
  item: IItem;
};

const Checkbox = ({ attributeKey, item }: CheckBoxProps): JSX.Element => {
  const { updateAttributes } = useBuilderContext();

  const updateValue = () => {
    const newValue = !item.attributes[attributeKey];
    updateAttributes(item.id, { [attributeKey]: newValue });
  };

  return (
    <CheckboxWrapper>
      <div className="attribute-value">
        <label htmlFor={NAME[attributeKey]}>{NAME[attributeKey]}</label>
        <input
          id={NAME[attributeKey]}
          onChange={updateValue}
          type="checkbox"
          checked={item.attributes[attributeKey] as boolean}
        />
      </div>
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
  }

  .attribute-value {
    align-items: center;
    display: flex;

    label {
      margin-right: 10px;
      text-transform: capitalize;
    }

    input {
      cursor: pointer;
    }
  }
`;
