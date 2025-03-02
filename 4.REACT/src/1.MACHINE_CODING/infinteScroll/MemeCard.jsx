export const MemeCard = ({ data }) => {
  const { thumbnail, title } = data;
  
    return (
      <div
        className="p-5 m-5 border border-black rounded-lg"
        style={{
          border: "5px solid blue",
        }}
      >
        <img alt="meme" src={thumbnail} />
        <p>{title}</p>
      </div>
    );
  };
  