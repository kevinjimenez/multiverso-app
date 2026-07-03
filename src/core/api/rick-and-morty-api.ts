import axios from 'axios';

export const rickAndMortyApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_RICK_AND_MORTY_API_URL,
});
