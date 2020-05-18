import React, { useCallback } from "react";

const Dashboard = ({ setLoggedIn }) => {
    const onLogout = useCallback(() => setLoggedIn(false), [setLoggedIn])

    return (
        <div>
            <h1>Welcome to the dashboard you're logged in</h1>
            <button onClick={onLogout}>Log Out</button>

        </div>
    );
};

export default Dashboard;
