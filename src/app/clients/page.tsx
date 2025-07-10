'use client'

import { Footer } from "@/components/Footer";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Page = () => {
    const searchParams = useSearchParams()
    const cid = searchParams.get('cid')

    return (
        <>
            <Box className="text-white bg-lsblack pt-5 pb-5">
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" paragraph>
                                Welcome!
                            </Typography>
                            <p>N° Client: {cid}</p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Page;