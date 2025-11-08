import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { OTPOptions, Algorithm } from "@/types/otp";
import { OptionSlider } from "@/components/OptionSlider";
import { AlgorithmSelector } from "@/components/ui/AlgorithmSelector";
import { Tip } from "@/components/Tip";
import {
  DURATION_LIMITS,
  DIGITS_LIMITS,
  DEFAULT_OTP_OPTIONS,
} from "@/constants/otp";

interface OTPControlsProps {
  options: OTPOptions;
  onOptionsChange: (field: keyof OTPOptions, value: string | number) => void;
}

export function OTPControls({ options, onOptionsChange }: OTPControlsProps) {
  return (
    <Grid container rowSpacing={5} padding={1}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="caption" color="#0009">
          Duration
        </Typography>
        <OptionSlider
          name="duration"
          aria-label="Duration"
          onChangeHandler={(e) => onOptionsChange("duration", e.value)}
          step={1}
          min={DURATION_LIMITS.min}
          max={DURATION_LIMITS.max}
          defaultValue={DEFAULT_OTP_OPTIONS.duration}
          valueLabelDisplay="on"
        />
        <Tip
          text="Duration (in seconds) a token is valid for."
          icon="duration"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Typography variant="caption" color="#0009">
          Digits
        </Typography>
        <OptionSlider
          name="digits"
          aria-label="Digits"
          max={DIGITS_LIMITS.max}
          min={DIGITS_LIMITS.min}
          marks
          step={1}
          valueLabelDisplay="on"
          onChangeHandler={(e) => onOptionsChange("digits", e.value)}
          defaultValue={DEFAULT_OTP_OPTIONS.digits}
        />
        <Tip text="The number of digits for the token" icon="digits" />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <AlgorithmSelector
          value={options.algorithm as Algorithm}
          onChange={(value) => onOptionsChange("algorithm", value)}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Tip
          text="The algorithm used for calculating the HMAC, default is 'sha1'."
          icon="hashAlgo"
          top={0.5}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          type="text"
          label="Secret"
          value={options.secret}
          onChange={(e) => onOptionsChange("secret", e.target.value)}
          fullWidth
          size="small"
        />
        <Tip
          text="Secret key used by the hash function to calculate the HMAC."
          icon="secret"
          top={0.5}
        />
      </Grid>

      <Grid size={{ xs: 12 }} container rowSpacing={2}>
        <Grid size={{ xs: 6 }}>
          <TextField
            type="text"
            label="Account"
            value={options.account}
            onChange={(e) => onOptionsChange("account", e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField
            type="text"
            label="Issuer"
            value={options.issuer}
            onChange={(e) => onOptionsChange("issuer", e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Tip
          text="The account is the identifier/name of the user and the issuer is the provider or service."
          icon="account"
          top={0.5}
        />
      </Grid>
    </Grid>
  );
}
