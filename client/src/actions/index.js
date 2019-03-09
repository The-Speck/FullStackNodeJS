import axios from 'axios';
import { FETCH_USER } from './types';

const fecthUser = () => {
    axios.get('/api/user');
}