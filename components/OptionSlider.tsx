import Slider from "@mui/material/Slider";

export function OptionSlider(props) {
  const { onChangeHandler, ...fields } = props;
  function onValueChanged(e) {
    if (onChangeHandler) onChangeHandler(e);
  }
  return <Slider {...fields} onChange={onValueChanged} />;
}
