import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { InputIntlPhone } from './InputIntlPhone';

const app = document.createElement('div');
app.id = 'app';
document.getElementsByTagName('body')[0].appendChild(app);
ReactDOM.createRoot(app).render(
  <StrictMode>
    <InputIntlPhone />
  </StrictMode>,
);
