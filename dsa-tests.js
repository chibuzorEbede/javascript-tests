function minReplacements(version1, version2, k) {
  if (version1.length !== version2.length) {
    return false; // Only replacements are allowed, no insertions/deletions
  }

  let diff = 0;
  for (let i = 0; i < version1.length; i++) {
    if (version1[i] !== version2[i]) {
      diff++;
    }
  }

  return diff <= k;
}

console.log(minReplacements("abcd", "wxyz", 2));
