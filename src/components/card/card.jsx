 import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCotributors, getCurrentRepo } from '../action/repos';
import './card.less';
 
 const Card = (props) => {
    const navigate = useNavigate()
    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])

    useEffect(()=> {
        getCurrentRepo(username, reponame, setRepo)
        getCotributors(username, reponame, setContributors)
    }, [])

    return (
        <div>
            <button onClick = {() => navigate(-1) } className='button__back'>Назад</button>
            <div className='card'>
                <img src = {repo.owner.avatar_url} alt="" />
                <div className='name'>{repo.name}</div>
                <div className='stars'>{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
                <div>{index+1}. {c.login}</div>
            )}
        </div>
    )
 }

 export default Card;