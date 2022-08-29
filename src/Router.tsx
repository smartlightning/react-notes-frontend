//const notePath = `/note/:noteId`;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotesDashboard from './pages/NotesDashboard';

const rootPath = '/';
const notesListPath = '/notes';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={rootPath} element={<Login />} />
        <Route path={notesListPath} element={<NotesDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export const ROUTES = rootPath;
export const NOTES = notesListPath;
export default Router;
