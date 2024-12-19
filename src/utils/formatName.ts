function formatName(name: string): string {
  // Split the input string into an array of words
  const words = name.split(' ');

  // Capitalize the first letter of each word and convert the rest to lowercase
  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the formatted words back into a single string
  return formattedWords.join(' ');
}

export default formatName;
