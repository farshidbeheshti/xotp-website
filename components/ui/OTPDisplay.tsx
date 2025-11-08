import { Stack, Box, Typography, TextField } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import { RemainingTime } from "@/components/RemainingTime";
import { OTPResult } from "@/types/otp";

interface OTPDisplayProps {
  otp: OTPResult;
  duration: number;
  remaining: number;
}

export function OTPDisplay({ otp, duration, remaining }: OTPDisplayProps) {
  return (
    <Stack alignItems="center" width="100%">
      <RemainingTime duration={duration} remaining={remaining} />

      <Box textAlign="center" marginY={2}>
        <Typography variant="h2" component="span">
          {otp.token}
        </Typography>
      </Box>

      <QRCodeSVG value={otp.keyUri} size={186} />

      <TextField
        fullWidth
        margin="normal"
        type="text"
        label="Key URI"
        value={otp.keyUri}
        slotProps={{ htmlInput: { readOnly: true } }}
        focused
      />
    </Stack>
  );
}
