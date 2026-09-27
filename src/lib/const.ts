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

// Todo List
type TypeNavTabs = {
  label: string;
  value: string;
};

export const NavTabsList: TypeNavTabs[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

export type TYPE_PAGINATION = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type TYPE_PAGINATION_META = {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type TYPE_TASK_LIST = {
  id?: number;
  task: string;
  createdDate?: string;
  isImportant?: boolean;
  isCompleted?: boolean;
  isEdited?: boolean;
};

export const DataTaskList: TYPE_TASK_LIST[] = [
  {
    id: 1,
    task: "Finish portfolio website",
    createdDate: "2026-09-15T00:17:48.091272",
    isImportant: true,
    isCompleted: false,
    isEdited: false,
  },
  {
    id: 2,
    task: "Study Dutch A2/B1",
    createdDate: "2026-09-15T00:09:04.091272",
    isImportant: false,
    isCompleted: false,
    isEdited: false,
  },
  {
    id: 3,
    task: "Go to gym",
    createdDate: "2026-09-15T00:13:15.091272",
    isImportant: false,
    isCompleted: false,
    isEdited: false,
  },
  {
    id: 4,
    task: "Plan the weekend trip",
    createdDate: "2026-09-15T00:14:55.091272",
    isImportant: false,
    isCompleted: true,
    isEdited: false,
  },
];
