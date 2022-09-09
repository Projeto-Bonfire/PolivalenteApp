import api from '../api';

export const postAvaliation = async (data) => {
  return api.post('/statistics/avaliation', data).catch((error) => {
    return { error };
  });
};

export const postChat = async (data) => {
  return api.post('/statistics/chat', data).catch((error) => {
    return { error };
  });
};