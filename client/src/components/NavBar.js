import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { AdminRoute, LoginRoute, ShopRoute } from "../utils/consts";
import { Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(ShopRoute);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }} to={ShopRoute}>
                    КупиДевайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(AdminRoute)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={logOut}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(LoginRoute)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;