export const formatEpisodeCode = (code: string): string => {
  const match = code.match(/S(\d+)E(\d+)/i);
  if (!match) return code;
  const [, season, episode] = match;
  return `${Number(season)}x${episode}`;
};
