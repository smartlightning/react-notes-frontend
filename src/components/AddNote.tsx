
import { Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useRef } from 'react';
import uuid4 from 'uuid4';
import { notesService } from '../services/notesService';
import { NoteProps } from '../types/noteInterface';
import TextFieldWrapper from './common/TextFieldWrapper';
import * as Yup from 'yup';
import ButtonWrapper from './common/ButtonWrapper';
const FORM_VALIDATION = Yup.object().shape({});
interface AddNoteProps {
  note?: NoteProps | undefined | null;
  closeNoteModal: () => void;
  onSuccess?: Function;
}

const getCurrentNoteValues = (note: NoteProps) => {
  if (note) {
    return {
      noteId: note.noteId,
      notesTitle: note.notesTitle,
      createdAt: note.createdAt,
      username: note.username,
      note: note.note,
    };
  }
};
const getInitialNoteState = () => ({
  noteId: uuid4(),
  notesTitle: '',
  createdAt: '',
  username: '',
  note: '',
});
const AddNote: FC<AddNoteProps> = ({
  note,
  closeNoteModal,
  onSuccess = () => {},
}) => {
  const initialValues: any = note
    ? getCurrentNoteValues(note)
    : getInitialNoteState();
  const isMounted = useRef(true);

  const generatePayload = ({ ...values }) => {
    const valuesToSend = {
      ...values,
    };
    return valuesToSend;
  };

  const updateNote = (valuesToSend: any, resetForm: any) => {
    if (isMounted.current && note) {
      notesService
        .updateNote(note.noteId, valuesToSend as any)
        .then(() => {
          closeNoteModal();
          //snackbar?
          onSuccess(valuesToSend);
        })
        .catch((error) => console.log(error));
    }
  };
  const createNote = (valuesToSend: any, resetForm: any) => {
    notesService
      .createNote(valuesToSend)
      .then(() => {
        resetForm({ values: getInitialNoteState() });
        closeNoteModal();
        //snackbar?
      })
      .catch((error) => console.log(error));
  };
  return (
    <Grid>
      <Formik
        initialValues={initialValues}
        validationSchema={FORM_VALIDATION}
        onSubmit={({ ...values }, { resetForm }) => {
          const valuesToSend = generatePayload({
            note,
            ...values,
          });

          if (note) {
            updateNote(valuesToSend, resetForm);
          } else {
            createNote(valuesToSend, resetForm);
          }
        }}>
        {({ values }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldWrapper
                    name='notesTitle'
                    label='Titel'
                    placeholder='Titel'
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextFieldWrapper
                    name='note'
                    label='Notiz'
                    placeholder='Notiz'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper
                    name='username'
                    label='Author'
                    placeholder='Autor'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper
                    name='createdAt'
                    label='Datum'
                    placeholder='Datum'
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <ButtonWrapper>
                    {note ? 'Speichern' : 'Erstellen'}
                  </ButtonWrapper>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default AddNote;
