export const getRandomCards = async () => {
  try {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&sort=random&cachebust`
    );
    const info = await response.json();
    console.log(info.data);
    return { data: info.data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: error };
  }
};
getRandomCards();
