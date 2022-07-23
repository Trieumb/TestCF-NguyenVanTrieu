import React, {useEffect, useState} from 'react';

const Index = () => {
  const [dataLink, setDataLink] = useState (null);

  const [shrtco, setShrtco] = useState (false);
  const [qr, setQr] = useState (false);
  const [shiny, setShiny] = useState (false);

  const [input, setInput] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
    shrtcodeAPI (input);
    setInput ('');
  };

  const shrtcodeAPI = async URL => {
    try {
      const res = await fetch (`https://api.shrtco.de/v2/shorten?url=${URL}`);
      const data = await res.json ();
      setDataLink (data.result);
    } catch (error) {
      console.log (error);
    }
  };
  useEffect (() => {
    shrtcodeAPI ();
  }, []);

  return (
    <div className="container">
      <h1>The <span> privacy-friendly</span> URL Shortener</h1>
      <div className="content">
        <h3>Link Shortener</h3>
        <form onSubmit={handleSubmit}>
          <label>Enter a Link :</label>
          <input
            type="text"
            placeholder="Example.com"
            value={input}
            onChange={e => setInput (e.target.value)}
          />
          <button>Enter</button>
        </form>
        <span>Short domain :</span>
        <button onClick={() => setShrtco (shrtco ? false : true)}>
          shrtco.de
        </button>
        <button onClick={() => setQr (qr ? false : true)}>
          9pr.de
        </button>
        <button onClick={() => setShiny (shiny ? false : true)}>
          shiny.link
        </button>
      </div>
      <h3>Link generated!</h3>
      {shrtco && <p style={{color: 'green'}}>{dataLink.full_share_link}</p>}
      {qr && <p style={{color: 'green'}}>{dataLink.full_short_link2}</p>}
      {shiny && <p style={{color: 'green'}}>{dataLink.short_link3}</p>}
    </div>
  );
};

export default Index;
