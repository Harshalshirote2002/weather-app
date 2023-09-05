import './styles.css';
import { createHeader } from './header';


const body = document.querySelector('body');
const header = createHeader();
body.appendChild(header);