// Tennis Tracker
type TYPE_PLAYER = {
  playerName: string;
};

export type TYPE_MATCH = {
  playerOne: TYPE_PLAYER;
  playerTwo: TYPE_PLAYER;
  gamesWonByPlayerOne: number;
  gamesWonByPlayerTwo: number;
  createdDate?: Date;
};

export type TYPE_MATCH_PAYLOAD = {
  playerOne: string;
  playerTwo: string;
  numberOfSets?: number;
  numberOfGames?: number;
  gamesWonByPlayerOne: number;
  gamesWonByPlayerTwo: number;
  createdDate?: Date;
  id?: string;
};
