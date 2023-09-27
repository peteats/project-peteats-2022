import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function CustomAsyncSelect({ data }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{
        // width: '100%',
        // border: '2px solid #DB8C8C',
        // borderRadius: 2,

        // '& .MuiOutlinedInput-root': {
        //   border: '2px solid #DB8C8C',
        //   borderRadius: 2,
        // },

        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          border: '2px solid #DB8C8C',
          borderRadius: 1,
        },
        // change input's color
        '& input': {
          // width: 200,
          // color: 'red',
          // bgcolor: 'background.paper',
          // color: (theme) => theme.palette.getContrastText(theme.palette.background.paper),
        },
      }}
      // disable the default icon
      forcePopupIcon={false}
      // popupIcon={() => {
      // }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      // JSX-Render
      renderInput={(params) => (
        <>
          {/* <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} />
          </div> */}

          <TextField
            {...params}
            sx={{
              '& label.Mui-focused': {
                // color: 'green',
                border: '2px solid #DB8C8C',
                borderRadius: 1,
              },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  border: '2px solid #DB8C8C',
                  borderRadius: 1,
                  // borderColor: '#DB8C8C',
                },
                '&.Mui-focused fieldset': {
                  border: '2px solid #DB8C8C',
                  borderRadius: 1,
                },
              },
            }}
            label=""
            // label="立即搜尋商品"
            // label="Asynchronous"
            // change label's color
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        </>
      )}
      // end of renderInput
    />
  );
}

export default CustomAsyncSelect;
