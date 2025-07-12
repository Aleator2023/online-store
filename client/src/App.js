import React, { useContext, useEffect, useState } from 'react';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then(data => {
                user.setUser(data);
                user.setIsAuth(true);
            })
            .catch(() => {
                localStorage.removeItem('token');
                user.setUser({});
                user.setIsAuth(false);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="grow" />
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <AppRouter />
        </>
    );
});

export default App;