import React, { useState } from 'react';
import '../styles/FinancialSummaryTable.css';
import EditEntryModal from './EditEntryModal';
import type { Asiento } from '../types/Asiento';

interface FinancialSummaryTableProps {
  asientos: Asiento[];
  setAsientos: React.Dispatch<React.SetStateAction<Asiento[]>>;
  fetchAsientos: () => Promise<void>;
  updateAsiento: (id: number, entry: Asiento) => Promise<void>;
  deleteAsiento: (id: number) => Promise<void>;
}

const FinancialSummaryTable: React.FC<FinancialSummaryTableProps> = ({ asientos, setAsientos, fetchAsientos, updateAsiento, deleteAsiento }) => {
  const [editIdx, setEditIdx] = useState<number | null>(null);

  const total = asientos.reduce((acc, curr) => acc + Number(curr.monto), 0);

  const handleDelete = async (idx: number) => {
  if (asientos[idx].id) {
    await deleteAsiento(asientos[idx].id);
  }
  };

  const handleSave = async (updatedEntry: Asiento) => {
    if (editIdx !== null) {
      setAsientos(asientos => asientos.map((e, i) => i === editIdx ? updatedEntry : e));
      setEditIdx(null);
      // await updateAsiento(updatedEntry); // Si implementas el método en el hook
      // await fetchAsientos(); // Para refrescar la lista después de actualizar
    }
  };

  return (
    <div className="financial-summary-table">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {asientos.map((entry, idx) => (
            <tr key={entry.id ?? idx}>
              <td>{entry.fecha}</td>
              <td>{entry.monto}</td>
              <td>{entry.descripcion}</td>
              <td>{entry.categoria}</td>
              <td>
                <button className="edit-btn" onClick={() => setEditIdx(idx)}>Editar</button>
               <button className="delete-btn" onClick={() => handleDelete(idx)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Total Ahorrado</td>
            <td style={{ fontWeight: 'bold' }}>{total}</td>
            <td colSpan={3}></td>
          </tr>
        </tfoot>
      </table>
      <EditEntryModal
      isOpen={editIdx !== null}
      onClose={() => setEditIdx(null)}
      entry={editIdx !== null ? asientos[editIdx] : null}
      onSave={async (updatedEntry) => {
        if (editIdx !== null && asientos[editIdx].id) {
          await updateAsiento(asientos[editIdx].id, updatedEntry);
          setEditIdx(null);
    }
  }}
/>
    </div>
  );
};

export default FinancialSummaryTable;