import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TabelMahasiswa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create an async function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8082/mahasiswa');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    // Call the async function
    fetchData();
  }, []);

  return (<>
        <div className="container">
        <h1 className="text-center p-3 m-3">Daftar Mahasiswa</h1>
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
              <table className="table border-dark table-striped table-hover table-bordered  w-auto border">
                <thead className="table-dark">
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Kelas</th>
                        <th>Angkatan</th>
                        <th>Alamat</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map((mahasiswa) => (
                      <tr key={mahasiswa.nim}>
                        <td>{mahasiswa.nim}</td>
                        <td>{mahasiswa.nama}</td>
                        <td>{mahasiswa.jurusan}</td>
                        <td>{mahasiswa.kelas}</td>
                        <td>{mahasiswa.angkatan}</td>
                        <td>{mahasiswa.alamat}</td>
                      </tr>
                    ))}          
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>);
}

export default TabelMahasiswa;