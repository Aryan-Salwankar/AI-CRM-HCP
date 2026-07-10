import { Container, Typography, Grid } from "@mui/material";
import InteractionForm from "../components/InteractionForm";
import AIAssistant from "../components/AIAssistant";

function HCPLogScreen() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 3 }}
      >
        Log HCP Interaction
      </Typography>

      <Grid container spacing={3}>
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 8 }}>
          <InteractionForm />
        </Grid>

        {/* Right Side */}
        <Grid size={{ xs: 12, md: 4 }}>
          <AIAssistant />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HCPLogScreen;