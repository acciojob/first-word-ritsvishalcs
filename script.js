function firstWord(s) {
  // Remove leading spaces
  s = s.trimStart();

  // Find index of first space
  const firstSpaceIndex = s.indexOf(' ');

  // If no space found, return the whole string
  if (firstSpaceIndex === -1) {
    return s;
  }

  // Return substring up to the first space
  return s.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

