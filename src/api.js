const ITEMS = [
    { title: 'item', publisher: 'Alice' },
    { title: 'Axe', publisher: 'Bob' },
    { title: 'Piano', publisher: 'Chris' }
  ];
const getItems = () => { return Promise.resolve(ITEMS); };

export { getItems };