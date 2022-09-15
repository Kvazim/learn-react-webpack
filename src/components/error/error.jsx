import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.less";


const Error = () => {
    const navigate = useNavigate()

    return (
        <div className="error-container">
            <h1 className="error-text">ошибка загрузки вернитесь и повторите попытку</h1>
            <button onClick = {() => navigate(-1) } className='button__back'>Вернуться назад</button>
        </div>
    )
}

export default Error;