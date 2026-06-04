import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="grey.100"
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" color="primary" fontWeight="bold">
          Hola Mundo
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Mi primera tarjeta con Material UI
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Click aquí
        </Button>
      </Paper>
    </Box>
  );
}

export default App;