import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Items';
import {Category} from './types/Category';
import { categories} from './data/categories';
import { items} from './data/items';
import {getCurrentMonth, FilterListByMonth} from './helpers/date.filter';
import {TableArea} from './components/TableArea'


const App = () =>{

  const [list, setList] = useState(items);
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [currentMounth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(() =>{
      setFilteredList(FilterListByMonth(list, currentMounth));
  }, [list, currentMounth]);

  return(
    <C.Container>
      <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
          {/* Area 01: Area de informações */}
          {/* Area 02: Area de Inserção */}
          {/* Area 03: Tabela de Itens */}
          <TableArea list={filteredlist}/>
      </C.Body>

    </C.Container>
  );
}

export default App;
