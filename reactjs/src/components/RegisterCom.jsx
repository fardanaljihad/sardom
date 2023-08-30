import React, { useState } from 'react';

function RegisterCom() {
    const [formData, setFormData] = useState({
      nim: '',
      nama: '',
      alamat: '',
      jurusan: '',
      angkatan: '',
      kelas: ''
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8082/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log('Data berhasil dikirim!');
        } else {
          console.log('Terjadi kesalahan saat mengirim data.');
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    return (
      <div className="App">
        <h1>Form Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>NIM:</label>
            <input
              type="text"
              name="nim"
              value={formData.nim}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Nama:</label>
            <input
              type="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Alamat:</label>
            <input
              type="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Jurusan:</label>
            <input
              type="jurusan"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Angkatan:</label>
            <input
              type="angkatan"
              name="angkatan"
              value={formData.angkatan}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Kelas:</label>
            <input
              type="kelas"
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default RegisterCom;
  