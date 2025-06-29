import React, { useState } from 'react';
import '../styles/SearchBar.css';
import CreateEntryModal from './CreateEntryModal';

interface Entry {
  fecha: string;
  monto: number;
  descripcion: string;
  categoria: string;
}

interface SearchBarProps {
  createAsiento: (entry: Entry) => Promise<void>;
  fetchAsientos: () => Promise<void>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ createAsiento, fetchAsientos, search, setSearch }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="search-bar-container">
      <input className="search-input" placeholder="Buscar..."  value={search} onChange={e => setSearch(e.target.value)} />
      <button className="create-btn" onClick={() => setModalOpen(true)}>Crear Asiento</button>
      <CreateEntryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        createAsiento={createAsiento}
        fetchAsientos={fetchAsientos}
      />
    </div>
  );
};

export default SearchBar;