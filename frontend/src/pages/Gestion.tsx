import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FinancialSummaryTable from '../components/FinancialSummaryTable';
import { useAsientos } from '../hooks/useAsientos';
import '../styles/SearchBar.css';
import '../styles/FinancialSummaryTable.css';

const Gestion: React.FC = () => {
  const { asientos, setAsientos, fetchAsientos, createAsiento, updateAsiento, deleteAsiento } = useAsientos();
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    fetchAsientos();
  }, []);

  const filteredAsientos = asientos.filter(a =>
    a.descripcion.toLowerCase().includes(search.toLowerCase()) ||
    a.categoria.toLowerCase().includes(search.toLowerCase()) ||
    String(a.monto).includes(search)
  );

  return (
    <>
      <Navbar onlyLogout />
      <div style={{ padding: '2rem 4rem' }}>
        <h1 style={{
          marginTop: '5rem',
          color: '#F54D4D',
          fontWeight: 'bold',
          fontSize: '3rem',
          marginBottom: '1.5rem',
        }}>
          RESUMEN FINANCIERO
        </h1>
        <SearchBar createAsiento={createAsiento} fetchAsientos={fetchAsientos} search={search} setSearch={setSearch} />
        <FinancialSummaryTable asientos={filteredAsientos} setAsientos={setAsientos} fetchAsientos={fetchAsientos} updateAsiento={updateAsiento} deleteAsiento={deleteAsiento} />
      </div>
    </>
  );
};

export default Gestion;