import * as userActionCreators from './user';
import { setEvents, setEventSeen } from './events';

const eventActionCreators = { setEvents, setEventSeen };

const allActionCreators = {
  ...userActionCreators,
  ...eventActionCreators,
};

export type ActionTypes = ReturnType<
  (typeof allActionCreators)[keyof typeof allActionCreators]
>;
