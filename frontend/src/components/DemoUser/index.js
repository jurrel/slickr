import React from 'react';
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function DemoUser() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async(e) => {
        e.preventDefault();

        const DemoUser = {
            credential: 'demo',
            password: 'password',
        };

    
        await dispatch(login(DemoUser))
        history.push("/");  //after demo user button is click it automatically goes to home page
    }

    return(
        <div>
            <form onSubmit={ handleClick }>
                <button type='submit'> Demo User </button>
            </form>
        </div>
    )

}

export default DemoUser;