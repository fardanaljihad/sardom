import React from 'react';


function LoginCom() {
  return <>
    <section className="vh-100 bg-secondary">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center body-login radius">
                <h3 className="mb-5 text-white">Sarhub</h3>
                <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Username" />
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password"/>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit"><b>Login</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default LoginCom;