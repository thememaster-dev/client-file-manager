import { createStore } from 'redux';
import { formData } from './ducks/reducer';

export default function configureStore() {
    return createStore(
        formData
    )
}