import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/Items';
// import {Category} from './types/Category';
import { categories} from './data/categories';
import { items} from './data/items';
import {getCurrentMonth, FilterListByMonth} from './helpers/date.filter';
import {TableArea} from './components/TableArea';
import {InfoArea} from './components/InfoArea';
import {InputArea} from './components/InputArea';


const App = () =>{

  const [list, setList] = useState(items);
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() =>{
      setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() =>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredlist){
      if (categories[filteredlist[i].category].expense) {
        expenseCount += filteredlist[i].value;
      }else{
        incomeCount += filteredlist[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  },[filteredlist]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };
  
  const handleAddItem = (item: Item) =>{
      let newList = [...list];
      newList.push(item);
      setList(newList);
  }


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
          income={income}
          expense={expense}
          />

          {/* Area 02: Area de Inserção */}
          <InputArea onAdd={handleAddItem}/>


          {/* Area 03: Tabela de Itens */}
          <TableArea list={filteredlist}/>
      </C.Body>

    </C.Container>
  );
}

export default App;
