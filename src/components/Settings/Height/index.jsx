import Input from "components/common/Input";

const Height = ({ attribute, attributes, heightValue, updateHeight }) => (
  <div key={attribute}>
    <span className="attribute-name">{attribute} : </span>
    <span className="attribute-value">
      <Input
        name={attribute}
        onChange={updateHeight}
        placeholder="300"
        value={attributes.height || heightValue}
      />
    </span>
  </div>
);

export default Height;
