"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  Box,
  Stack,
  Container,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { QRCodeSVG } from "qrcode.react";
import { createTOTPToken } from "@/app/lib/xotp";
import { RemainingTime, OptionSlider } from "@/components";

export default function Home() {
  const [otp, setOtp] = React.useState({
    token: "",
    keyUri: "",
    remaining: 0,
  });

  const [options, setOptions] = React.useState({
    algorithm: "sha1",
    secret: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    duration: 30,
    digits: 6,
    window: 0,
    issuer: "XOTP",
    account: "XOTP",
  });
  const [remaining, setRemaining] = React.useState(0);

  // TODO: define the `newOptions` type
  function refereshTotp(newOptions) {
    const request = {
      ...newOptions,
      secret: newOptions.secret.toUpperCase(),
    };
    createTOTPToken({ ...request })
      .then((result) => {
        setOtp({
          ...result,
          token: result.token,
          keyUri: result.keyUri,
        });
        setRemaining(
          newOptions.duration -
            (Math.floor(Date.now() / 1000) % newOptions.duration)
        );
        setOptions({ ...request });
      })
      .catch(() => {})
      .finally(() => {});
  }

  let counter = 0;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newOptions = { ...options, [name]: value };

    setOptions({ ...newOptions });
    (function (localCounter) {
      const id = setTimeout(() => {
        // Just to make sure it doesn't send the request
        // on any quick user action like typing quickly.
        if (localCounter == counter) {
          clearTimeout(id);
          refereshTotp(newOptions);
        }
      }, 200);
    })(++counter);
  };

  // TODO: validate the value for all fields!
  return (
    <div>
      <main>
        <Container maxWidth={"xl"}>
          <Typography
            variant="h1"
            fontWeight={"100"}
            sx={{ fontSize: "2.4rem" }}
            component="h1"
          >
            OTP by XOTP
          </Typography>
          <Grid container height={"100%"} size={{ lg: 6 }}>
            <Grid
              size={{ xs: 6 }}
              container
              alignContent={"center"}
              justifyContent={"center"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Grid size={{ xs: 6 }} padding={2}>
                <Typography
                  textAlign={"left"}
                  variant="caption"
                  id="track-inverted-slider"
                  gutterBottom
                >
                  Duration
                </Typography>
                <OptionSlider
                  name="duration"
                  aria-label="Duration"
                  defaultValue={options.duration}
                  onChangeCommitted={handleChange}
                  step={1}
                  min={1}
                  max={120}
                  valueLabelDisplay="on"
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Typography
                  textAlign={"left"}
                  variant="caption"
                  id="track-inverted-slider"
                  gutterBottom
                >
                  Digits
                </Typography>
                <OptionSlider
                  name="digits"
                  aria-label="Digits"
                  max={10}
                  min={1}
                  marks
                  step={1}
                  defaultValue={options.digits}
                  onChangeCommitted={handleChange}
                  valueLabelDisplay="on"
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <FormControl sx={{ minWidth: "50%" }}>
                  <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
                  <Select
                    labelId="algorithm-select-label"
                    id="demo-simple-select"
                    name="algorithm"
                    label="Algorithm"
                    value={options.algorithm}
                    onChange={handleChange}
                  >
                    <MenuItem value={"sha1"}>sha1</MenuItem>
                    <MenuItem value={"sha256"}>sha256</MenuItem>
                    <MenuItem value={"sha512"}>sha512</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextField
                  type="text"
                  name="account"
                  label="Account"
                  defaultValue={options.account}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextField
                  type="text"
                  name="issuer"
                  label="Issuer"
                  defaultValue={options.issuer}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextField
                  margin="normal"
                  type="text"
                  name="secret"
                  label="Secret"
                  defaultValue={options.secret}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 6 }}
              sx={{
                p: 2,
              }}
            >
              <Stack alignItems={"center"}>
                <RemainingTime
                  duration={options.duration}
                  remaining={remaining}
                />
                <Box textAlign={"center"} marginY={2}>
                  <Typography variant="h4">{otp.token}</Typography>
                </Box>
                <QRCodeSVG value={otp.keyUri} width={"100%"} />
                <TextField
                  fullWidth
                  margin="normal"
                  type="text"
                  name="keyUri"
                  label="Key URI"
                  defaultValue={otp.keyUri}
                  onChange={handleChange}
                  focused
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer>
        <a
          href="https://github.com/farshidbeheshti/xotp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ⓒ 2025 XOTP.
        </a>
      </footer>
    </div>
  );
}
