import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Who Am I?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hello! My name is Arun, and I work as a front-end developer. As you
            can observe, this website is one of the projects I have constructed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What Is This Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is a dashboard typically utilized for viewing a user's
            activity. I primarily constructed this dashboard to showcase my
            abilities in developing various elements such as forms, invoices,
            bar and pie charts, as well as a geography chart that is essential
            in web development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where to find the code for the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The code can be found in my github repository:
            https://github.com/ehrun32
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Have I built any other projects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have built tons of projects, including several web applications
            and hardware applications. This can be found in my
            portfolio/website: https://ehrun32.github.io/
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Contact me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you would like to contact me regarding anything my linkedin is
            open which can be found in my website, as well as my email:
            aruncheriakara@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
