import React, { useState, useEffect } from 'react';
import '../styles/CreateEntryModal.css';

interface EditEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: {
    fecha: string;
    monto: number;
    descripcion: string;
    categoria: string;
  } | null;
  onSave: (entry: { fecha: string; monto: number; descripcion: string; categoria: string }) => void;
}

const EditEntryModal: React.FC<EditEntryModalProps> = ({ isOpen, onClose, entry, onSave }) => {
  const [form, setForm] = useState({ fecha: '', monto: 0, descripcion: '', categoria: '' });

  useEffect(() => {
    if (entry) setForm(entry);
  }, [entry]);

  if (!isOpen || !entry) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'monto' ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">EDITAR ASIENTO</h2>
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
            <input type="text" name="categoria" value={form.categoria} onChange={handleChange} required />
          </label>
          <button type="submit" className="register-btn">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default EditEntryModal;
