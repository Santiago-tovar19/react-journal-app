import { IconButton, Typography } from "@mui/material";

import { NuevoComp } from "../layout/NuevoComp";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNotes } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNotes());
  };
  return (
    <NuevoComp>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontZise: 30 }} />
      </IconButton>
    </NuevoComp>
  );
};
