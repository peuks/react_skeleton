const useSearch = (data = []) => {
  const results = (userInput) => {
    return (
      data.length > 0 &&
      data
        .filter((word) => word.toLowerCase().includes(userInput))
        .sort()
        .splice(0, 5)
    );
  };
  return { results };
};

export default useSearch;
