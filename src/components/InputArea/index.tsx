import * as C from './styles';
import { Item } from '../../types/Items';

type Props = {
    onAdd: (item: Item) => void;
}


export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2021, 2, 22),
            category: 'food', 
            title: 'Item de teste',
            value: 240.23

        }
        
        onAdd(newItem);
    }

    return(
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}