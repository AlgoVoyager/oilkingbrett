import React, { useEffect, useRef } from 'react';

const TwitchEmbed = ({ channel }) => {
  const embedContainer = useRef(null);

  useEffect(() => {
    if (!embedContainer.current) {
      // Initialize the embed only if it hasn't been initialized yet
      new window.Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "720",
        channel: channel
      });
      embedContainer.current = true;
    }
  }, [channel]);


  return (
    <div>
      <div id="twitch-embed"></div>
    </div>
  );
};

export default TwitchEmbed;
