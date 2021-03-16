import React from "react";

interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface IMyProps {
  characterData: CharacterData;
}

const Character: React.FC<IMyProps> = (props: IMyProps) => {
  return (
    <div className="card mb-4 box-shadow">
      <img
        className="card-img-top"
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        alt="Thumbnail [100%x225]"
        src={props.characterData.image}
        data-holder-rendered="true"
      />
      <div className="card-body">
        <h4>{props.characterData.name}</h4>
        <h3>{props.characterData.species}</h3>
        <h3>{props.characterData.status}</h3>
      </div>
    </div>
  );
};

export default Character;
