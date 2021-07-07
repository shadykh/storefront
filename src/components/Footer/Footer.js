//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import { Typography } from "@material-ui/core";


/**
 *  Footer component.
 */

function Footer() {
  return (
    <footer>
      <Typography variant="h6" component="p" align="center" gutterBottom={true}>
        © ASAC 2021
      </Typography>
    </footer>
  );
}

// export the component
export default Footer;
