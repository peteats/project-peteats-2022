import React from 'react';
// import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

// import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

/**
 * #NOTE: disable the outline (often blue or gold) with the outline: 0
 */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: 'fit',
  p: 2,

  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  outline: 0,
};
/* end of CustomModal-Style */

function CustomModal(props) {
  const { title, children } = props;
  // const { title, content, children } = props;
  const { open, setOpen } = props;
  // const [open, setOpen] = React.useState(true);

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="cursor-pointer text-[#D9D9D9]
              hover:text-black"
            >
              <CloseIcon />
            </button>
          </div>

          <Typography
            id="keep-mounted-modal-description"
            component="span"
            sx={{ mt: 0 }}
          >
            {/* #NOTE: MUI
             * - <div> cannot appear as a descendant of <p>
             * - Add the `component="span"`
             */}
            {/* <Typography component={'span'} variant={'body2'}> */}
            {/* {content} */}
            {children}
          </Typography>
        </Box>
      </Modal>
    </section>
  );
}
/* end of MUI-KeepMountedModal() */

export default CustomModal;
