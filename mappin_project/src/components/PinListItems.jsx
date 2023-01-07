import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, ListItemButton, ListItemText, withTheme } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

function PinListItems({ pin, index, selected, refProp }) {
  const [open, setOpen] = React.useState(false);

  if (selected) {
    refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <Box
      sx={{
        bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
        pb: open ? 2 : 0,
      }}
    >
      <ListItemButton
        onClick={() => {
          setOpen(!open);
          
        }}
        sx={{
          gap: 3,
          px: 0,
          pt: 2.5,
          pb: open ? 0 : 2.5,
          background: selected ? "rgba(23, 152, 199, 0.3)" : "default",
          //   "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
        }}
      >
        <Box>
          <img
            src={
              pin.photo
                ? pin.photo.images.medium.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            width="100rem"
            height="70rem"
            style={{ borderRadius: "0.8rem" }}
            alt=""
          />
        </Box>
        <ListItemText
          primary={pin.name}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: "medium",
            lineHeight: "20px",
            mb: "2px",
          }}
          secondary={pin.address}
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: "16px",
            color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            mr: 1,
            opacity: 1,
            transform: open ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>
      {open && (
        <ListItemText
          primary={pin.address}
          primaryTypographyProps={{
            fontSize: 14,
            fontWeight: "medium",
          }}
        />
      )}
    </Box>
  );
}

export default PinListItems;
