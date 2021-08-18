import React from 'react';
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './DemoUser.css';

function DemoUser() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();

        const DemoUser = {
            credential: 'DemoUser',
            password: 'password',
        };

        await dispatch(login(DemoUser))
        history.push("/homepage");  //after demo user button is click it automatically goes to home page
    }

    return (
        <div >
            <form onSubmit={handleClick}>
                <button className='login' type='submit'> Demo User </button>
            </form>
        </div>
    )

}

export default DemoUser;