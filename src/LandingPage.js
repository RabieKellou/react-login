import React, { useCallback } from "react";

const LandingPage = ({ setLoggedIn }) => {
    const onLogin = useCallback(() => setLoggedIn(true),[setLoggedIn])
    return (
        <>
            <h1>you're no logged in</h1>
            <button onClick={onLogin}>Log In</button>
        </>
    );
};

export default LandingPage;
