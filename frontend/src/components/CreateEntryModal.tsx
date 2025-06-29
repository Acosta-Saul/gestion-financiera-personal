import React, { useState } from 'react';
import '../styles/CreateEntryModal.css';

interface Entry {
  fecha: string;
  monto: number;
  descripcion: string;
  categoria: string;
}

interface CreateEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  createAsiento: (entry: Entry) => Promise<void>;
  fetchAsientos: () => Promise<void>;
}

const CreateEntryModal: React.FC<CreateEntryModalProps> = ({ isOpen, onClose, createAsiento, fetchAsientos }) => {
  const [form, setForm] = useState<Entry>({
    fecha: '',
    monto: 0,
    descripcion: '',
    categoria: 'Ingreso',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'monto' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createAsiento(form);
    await fetchAsientos(); // Refresca la lista global
    setForm({ fecha: '', monto: 0, descripcion: '', categoria: 'Ingreso' });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">CREAR NUEVO ASIENTO</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Fecha
            <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
          </label>
          <label>
            Monto
            <input type="number" name="monto" value={form.monto} onChange={handleChange} required />
          </label>
          <label>
            Descripcion
            <input type="text" name="descripcion" value={form.descripcion} onChange={handleChange} required />
          </label>
          <label>
            Categoria
            <select name="categoria" value={form.categoria} onChange={handleChange}>
              <option value="Ingreso">Ingreso</option>
              <option value="Servicio">Servicio</option>
              <option value="Miscelaneos">Miscelaneos</option>
            </select>
          </label>
          <button type="submit" className="register-btn">Registrar asiento</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEntryModal;