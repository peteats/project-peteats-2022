import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  // const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  // children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func,
};

function ElevateAppBar(props) {
  return (
    <>
      <CssBaseline />

      <ElevationScroll>
        {/* sx={{ backgroundColor: 'transparent' }}
        className="my-4"
        defaultValue={30}
        classes={{ active: 'shadow-none' }}
        componentsProps={{ thumb: { className: 'hover:shadow-none' } }} */}
        <AppBar
          className="pe-container pl-8"
          componentsProps={{
            root: {
              className: 'my-16',
            },
          }}
        >
          {/* <AppBar sx={{ backgroundColor: `${red[500]}` }}> */}
          {/* <AppBar classes="bg-black"> */}
          <Toolbar>
            <Typography variant="h6" component="nav">
              Scroll to elevate App bar Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
              Cras mattis consectetur purus sit amet fermentum.
              Cras mattis consectetur purus sit amet fermentum.
              Cras mattis consectetur purus sit amet fermentum.
              Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </>
  );
}

export default ElevateAppBar;