import React, { useContext } from 'react';
import { Context } from '../../context/Context';

const ContextHandler = (props) => {
    const context = useContext(Context);

    return (
        <div className="top-settings">
            <label>Theme:</label>
            <select onChange={(e) => props.changeTheme(e.target.value)}>
                {
                    Object.keys(props.themes).map((theme) => (
                        <option
                            key={theme}
                            value={theme}
                        >
                            Selecteaza {theme}
                        </option>
                    ))
                }
            </select>

            <label>User:</label>
            <select onChange={(e) => props.changeUser(e.target.value)}>
                {
                    props.users.map((user) => (
                        <option
                            key={user.id}
                            value={user.username}
                        >
                            {user.username}
                        </option>
                    ))
                }
            </select>

            <label>App name:</label>
            <input 
                type="text" 
                onChange={(e) => props.changeAppName(e.target.value)} 
                value={context.applicationName}
            />
        </div>
    );};

export default ContextHandler;