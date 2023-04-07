import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { apiPath } from "../DinoTable/helper";

const MenuListComposition = ({ setApiCurrentPath, title }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleCloseTransactions = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setApiCurrentPath(apiPath.transactions);
    setOpen(false);
  };

  const handleCloseBurning = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setApiCurrentPath(apiPath.burn);
    setOpen(false);
  };
  const handleCloseStaking = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setApiCurrentPath(apiPath.staking);
    setOpen(false);
  };
  const handleCloseNFT = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setApiCurrentPath(apiPath.nft);
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const MenuListStyles = {
    backgroundColor: "#274540",
    color: "#fff",
  };

  const MenuListItemStyles = {
    backgroundColor: "#274540",
    color: "#fff",
    "&:hover":{
      background: "white",
      color: "black"
    },
  };

  const ButtonStyles = {
    fontWeight: "700",
    color: "#fff",
    border: "2px #fff solid",
    borderRadius: "10px",
    transition: "0.6s ease",
    "&:hover":{
        backgroundColor: '#274540)',
        transform: 'scale(1.05)',
      }
  };

  return (
    <Stack direction="row" spacing={2} style={{ zIndex: "1000" }}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={ButtonStyles}
        >
          {title}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={MenuListStyles}
                  >
                    <MenuItem onClick={handleCloseTransactions} sx={MenuListItemStyles}>
                      Buy Transactions
                    </MenuItem>
                    <MenuItem onClick={handleCloseStaking} sx={MenuListItemStyles}>Staking</MenuItem>
                    <MenuItem onClick={handleCloseBurning} sx={MenuListItemStyles}>Burning</MenuItem>
                    <MenuItem onClick={handleCloseNFT} sx={MenuListItemStyles}>NFT</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default MenuListComposition;
