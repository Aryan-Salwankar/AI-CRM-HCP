import {
  Paper,
  Typography,
  Stack,
  TextField,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";

function InteractionForm() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        minHeight: 700,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        Interaction Details
      </Typography>

      <Stack spacing={3} sx={{ mt: 3 }}>
        <TextField
          label="HCP Name"
          placeholder="Search or select HCP"
          fullWidth
        />

        <TextField
          select
          label="Interaction Type"
          defaultValue=""
          fullWidth
        >
          <MenuItem value="Meeting">Meeting</MenuItem>
          <MenuItem value="Call">Call</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
          <MenuItem value="Conference">Conference</MenuItem>
        </TextField>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              type="date"
              label="Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              type="time"
              label="Time"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
        </Grid>

        <TextField
          label="Attendees"
          placeholder="Enter attendees"
          fullWidth
        />

        <TextField
          label="Location"
          placeholder="Hospital / Clinic"
          fullWidth
        />

        <TextField
          label="Product Discussed"
          placeholder="Enter product name"
          fullWidth
        />

        <TextField
          label="Topics Discussed"
          multiline
          rows={4}
          placeholder="Enter discussion summary..."
          fullWidth
        />

        <TextField
          label="Follow-up Actions"
          multiline
          rows={3}
          placeholder="Mention next steps..."
          fullWidth
        />

        <TextField
          select
          label="Sentiment"
          defaultValue=""
          fullWidth
        >
          <MenuItem value="Positive">Positive</MenuItem>
          <MenuItem value="Neutral">Neutral</MenuItem>
          <MenuItem value="Negative">Negative</MenuItem>
        </TextField>

        <TextField
          type="date"
          label="Next Follow-up Date"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
        >
          Save Interaction
        </Button>
      </Stack>
    </Paper>
  );
}

export default InteractionForm;