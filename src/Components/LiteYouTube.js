import { useState } from "react";
import "../css/liteYouTube.css";

/**
 * Click-to-load YouTube facade. Shows only the poster image until the visitor
 * clicks play, so the ~500KB+ YouTube player never loads on first paint.
 */
function LiteYouTube({ id, title }) {
  const [activated, setActivated] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

  return (
    <div className="videoContainer">
      {activated ? (
        <iframe
          title={title}
          src={src}
          width="560"
          height="315"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <button
          type="button"
          className="liteYouTube"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          style={{ backgroundImage: `url(${poster})` }}
        >
          <span className="liteYouTubePlay" aria-hidden="true"></span>
        </button>
      )}
    </div>
  );
}

export default LiteYouTube;
