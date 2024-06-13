import { globalMetadata } from "@/app/metadata";
import Providers from "@/app/providers";

import { Box, Grid, Container } from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

export const metadata = globalMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // `suppressHydrationWarning` is used to suppress the warning about adding additional attributes (from libs like Chakra UI) to the `html` and `body` tags after page hydration
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navigation />
          <Box as="main" py={{ base: 4, md: 0 }} pb={{ base: 24, md: 0 }}>
            <Container>
              <Grid
                gridTemplateColumns={{ base: "1fr", md: "270px 1fr" }}
                gap="8"
                alignItems="start"
              >
                <Sidebar />
                <Box>{children}</Box>
              </Grid>
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
