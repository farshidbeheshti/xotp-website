import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Algorithm } from "@/types/otp";
import { ALGORITHMS } from "@/constants/otp";

interface AlgorithmSelectorProps {
  value: Algorithm;
  onChange: (value: Algorithm) => void;
}

export function AlgorithmSelector({ value, onChange }: AlgorithmSelectorProps) {
  return (
    <FormControl sx={{ minWidth: "100%" }}>
      <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
      <Select
        size="small"
        labelId="algorithm-select-label"
        value={value}
        label="Algorithm"
        onChange={(e) => onChange(e.target.value as Algorithm)}
      >
        {ALGORITHMS.map(({ value: algValue, label }) => (
          <MenuItem key={algValue} value={algValue}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
