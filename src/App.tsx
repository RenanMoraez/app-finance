import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Items';
import {Category} from './types/Category';
import { categories} from './data/categories';
import { items} from './data/items';
import {getCurrentMonth, FilterListByMonth} from './helpers/date.filter';
import {TableArea} from './components/TableArea';
import {InfoArea} from './components/InfoArea';


const App = () =>{

  const [list, setList] = useState(items);
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(() =>{
      setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return(
    <C.Container>
      <C.Header>
      <C.HeaderText>Sistema Financeiro 💰</C.HeaderText>
      </C.Header>

      <C.Body>
          {/* Area 01: Area de informações */}
          <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          />

          {/* Area 02: Area de Inserção */}
          {/* Area 03: Tabela de Itens */}
          <TableArea list={filteredlist}/>
      </C.Body>

    </C.Container>
  );
}

export default App;
