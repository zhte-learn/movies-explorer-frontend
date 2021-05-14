const adaptTime = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = Math.floor(((num % 60) * 100) / 100);

  return `${hours}ч ${minutes}м`;
}

export default adaptTime;
