import './Login.css';

const Login = () => {
    return (
        <div className="login-container">

            {/* Primera mitad Login */}
            <div className='login-left'>
                <div className='login-image-container'>
                    <img src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Perro" className='login-image' />
                </div>
                <div className='overlay'></div>

                <div className="login-text">
                    <h2>Mantén a tu mejor amigo seguro.</h2>
                    <p>
                        Nuestra plataforma te ayuda a localizar y gestionar el bienestar de tu mascota
                        dentro de la comunidad, todo en un solo lugar.
                    </p>
                </div>
            </div>

            {/* Segunda mitad Login */}
            <div className="login-right">

                <div className="login-box">
                    {/* Logo */}
                    <div className="logo">
                        <div className="logo-icon">🐾</div>
                        <span className="logo-text">PawTrack</span>
                    </div>

                    {/* Heading */}
                    <h1>Bienvenido de Nuevo</h1>
                    <p className="subtitle">Inicia sesión en tu cuenta para continuar</p>

                    {/* Email Field */}
                    <div className="email-field">
                        <label>Correo electrónico</label>
                        <input type="email" placeholder="tucorreo@gmail.com" />
                    </div>

                    {/* Password Field */}
                    <div className="password-field">
                        <label>Contraseña</label>
                        <input type="password" placeholder="Ingresa tu contraseña" />
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="options">
                        <label>
                            <input type="checkbox" /> Recordarme
                        </label>
                        <a href="#">¿Olvidaste la contraseña?</a>
                    </div>

                    {/* Login Button */}
                    <button className="btn-login">Iniciar Sesión</button>

                    {/* Divider */}
                    <div className="divider">
                        <span>O inicia sesión con</span>
                    </div>

                    {/* Social Login */}
                    <div className="social-login">
                        <button className="btn-social google">Google</button>
                        <button className="btn-social facebook">Facebook</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;