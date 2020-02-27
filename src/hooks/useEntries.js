import {useState, useEffect} from 'react';

import {getEntries, saveEntry, deleteEntry} from '../services/Entries';

const useEntries = (days = 7, category) => {
  const [entreis, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days, category);
      setEntries(data);
    }

    loadEntries();
  }, [days, category]);

  return [entreis, saveEntry, deleteEntry];
};

export default useEntries;
