import { useState } from 'react';
import Title from './Title';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category);

    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title title='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
