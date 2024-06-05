import React from 'react';
import RegistrationForm from './Form';
import Dashboard from './Dashboard';

function Regpage() {
    return (
        <div>
            <section className="container">
                <div className="row">
                    <div className="col-md-6 col-m-3">
                        <h1>Đăng ký xét tuyển</h1>
                        <RegistrationForm/>
                    </div>
                    <div className="col-md-6 col-m-3">
                        <Dashboard/>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Regpage;