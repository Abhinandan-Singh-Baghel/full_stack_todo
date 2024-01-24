import React, { useState, useEffect} from "react";

const GithubInfoCard = ({ username }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setUserData(data);
            } catch (error){
                console.log('Error fetching data from Github:', error);
            }
        };

        fetchGithubData();
    } , [username]);

    return (
        <div>
            {userData ? (
                <div>
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    <p>Public Repos: {userData.public_repos}</p>
                    </div>
            ) : (
                <p>Loading Github data.....</p>
            )}
        </div>
    );
};

export default GithubInfoCard