import React, { useState } from 'react';
import axios from 'axios';


function LoginCom() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await axios.post('http://localhost:8082/login', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (response.data !== '' && response.data.constructor === Object) {
              console.log(response.data)
            }
            else{
              console.log("Invalid Username or Password")
            }
        } catch (error) {
            // Tangani error, misalnya tampilkan pesan kesalahan
            console.error('Terjadi kesalahan saat login:', error);
        }
    };

  return (
    <section className="vh-100 bg-secondary login-background">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center body-login radius">
                <div className="row sarhub text-white mb-3">
                  <div className="col-auto sar">
                    Sar
                  </div>
                  <div className="col-auto hub">
                    dom
                  </div>
                </div>
                <form action="" id="login" method="post" onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input type="username" id="username" className="form-control form-control-lg" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit"><b>Login</b></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginCom;