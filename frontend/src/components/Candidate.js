import React from 'react';
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';

import css from './candidate.module.css';

export default function Candidate({  previousVote, previousPercentage, candidate, position }) {
  const { id, name, votes, percentage, popularity } = candidate;
  const imgSource = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imgSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Percentage value={percentage} previous={previousPercentage} />
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
