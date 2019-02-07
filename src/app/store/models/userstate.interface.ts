import { User } from './user.interface';

export interface UserState {
    loading: boolean;
    error: boolean;
    user: User;
  }

  const initialState: UserState = {
    loading: false,
    error: false,
    user: null
  };
