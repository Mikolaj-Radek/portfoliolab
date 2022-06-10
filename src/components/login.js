import React from 'react';
import '../scss/main.scss'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <section className="menu clearfix">
                <div className="reg_login">
                    <p>
                        Zaloguj
                    </p>
                    <Link className="link_login both_link_form"
                          to="/newAccount">
                        Załóż konto
                    </Link>
                </div>
                <div className="menu_login">
                    <ul className="ul_login_nav">
                        <li className="login li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  spy={true}
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                Start
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  spy={true}
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                O co chodzi?</Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  spy={true}
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                O nas
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/" spy={true}
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                Fundacja i organizacje
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  spy={true}
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="form_login">
                <div className="text_login">
                    Zaloguj się
                </div>
                <div className="form">
                    <div className="input_form">
                        <p className="email">
                            Email
                        </p>
                        <input className="form form_email"
                               type="email"
                               name="email"
                        />
                        <p className="password">
                            Hasło
                        </p>
                        <input className="form form_password"
                               type="password"
                               name="password"
                        />
                    </div>
                </div>
                <div className="form_reg">
                    <ul className="ul_form">
                        <li>
                            <Link className="create_acc both_link_form"
                                  to="/newAccount">
                                załóż konto
                            </Link>
                        </li>
                        <li>
                            <Link className="login_form both_link_form"
                                  to="/login">
                                Zaloguj się
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Login;