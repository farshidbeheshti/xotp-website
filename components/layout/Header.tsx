import { Container, Grid, Box, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="header"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image
            src="/xotp_128x128.png"
            width="40"
            height="40"
            alt="xotp logo"
            style={{ borderRadius: "8px" }}
          />
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              component="h1"
              fontWeight={700}
              color="primary.main"
              sx={{
                background: "linear-gradient(45deg, #1d4ed8, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              XOTP
            </Typography>
          </Link>
          <Typography
            variant="caption"
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              background:
                "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Playground
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <IconButton
            href="https://github.com/farshidbeheshti/xotp"
            target="_blank"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                color: "primary.main",
              },
            }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.npmjs.com/package/xotp"
            target="_blank"
            sx={{
              color: "#cb3837",
              ml: -1,
              "&:hover": {
                backgroundColor: "rgba(203, 56, 55, 0.1)",
              },
            }}
          >
            <Box component="svg" viewBox="0 0 24 24" width={24} height={24}>
              <path
                fill="#cb3837"
                d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113L5.13 5.323z"
              />
            </Box>
          </IconButton>
        </Box>
      </Grid>
    </Container>
  );
}
