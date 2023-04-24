import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ note }) => {
  const { title, id, body, date, imageUrls = [] } = note;
  const dispatch = useDispatch();

  const onClicNote = () => {
    dispatch(setActiveNote({ title, id, body, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={onClicNote}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={note.body} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
