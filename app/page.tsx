"use client";
import Grid from "@mui/material/Grid2";
import { useOTPGenerator } from "@/hooks/useOTPGenerator";
import { useDebounce } from "@/hooks/useDebounce";
import { OTPControls } from "@/components/forms/OTPControls";
import { OTPDisplay } from "@/components/ui/OTPDisplay";
import { DEFAULT_OTP_OPTIONS } from "@/constants/otp";
import { OTPOptions } from "@/types/otp";

export default function Index() {
  const { otp, options, remaining, generateOTP, setOptions } =
    useOTPGenerator(DEFAULT_OTP_OPTIONS);

  const debouncedGenerate = useDebounce((newOptions: OTPOptions) => {
    generateOTP(newOptions);
  }, 300);

  const handleOptionsChange = (
    field: keyof OTPOptions,
    value: string | number
  ) => {
    const newOptions = { ...options, [field]: value };
    setOptions(newOptions);
    debouncedGenerate(newOptions);
  };

  return (
    <Grid container alignItems="center" columnSpacing={1}>
      <Grid container size={{ sm: 12, md: 6 }} order={{ xs: 1, md: 0 }}>
        <OTPControls options={options} onOptionsChange={handleOptionsChange} />
      </Grid>

      <Grid
        flexGrow={1}
        container
        size={{ sm: 12, md: 6 }}
        padding={2}
        alignItems="center"
      >
        <OTPDisplay
          otp={otp}
          duration={options.duration}
          remaining={remaining}
        />
      </Grid>
    </Grid>
  );
}
