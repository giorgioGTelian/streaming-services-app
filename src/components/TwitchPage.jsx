import React, { useEffect, useState } from 'react';

const TwitchPage = () => {
    const [streamData, setStreamData] = useState(null);

    useEffect(() => {
        const fetchStreamData = async () => {
            try {
                const response = await fetch('https://api.twitch.tv/helix/streams?user_login=giorgiogte', {
                    headers: {
                        'Client-ID': 'dasdasdasd',
                        'Authorization': 'Bearer sdasdasdas'
                    }
                });
                const data = await response.json();
                setStreamData(data);
            } catch (error) {
                console.error('Error fetching stream data:', error);
            }
        };

        fetchStreamData();
    }, []);

    return (
        <div>
            {streamData && streamData.data.length > 0 ? (
                <iframe
                    src={`https://player.twitch.tv/?channel=giorgiogte&parent=localhost`}
                    height="480"
                    width="854"
                    allowFullScreen={true}
                ></iframe>
            ) : (
                <p>No live stream available.</p>
            )}
        </div>
    );
};

export default TwitchPage;
