export const getAvatar = (url)=>{
    return `${import.meta.env.VITE_SERVER_URL}/${url}`
}

export const getTimeDuration =(updatedDate)=>{
  const now = new Date();
  const updated = new Date(updatedDate); // e.g., "2025-06-28T18:30:00+06:00"

  const diffMs = now - updated; // milliseconds
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours   = Math.floor(diffMs / (1000 * 60 * 60));
  const days    = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24)   return `${hours} hours ago`;
  return `${days} days ago`;
}
