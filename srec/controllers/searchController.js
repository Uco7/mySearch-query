// controllers/searchController.js
const { SEARCH_INDEX } = require("../search/buildSearchIndex");

// Common filler words that shouldn't count toward a match — they appear in
// almost every natural-language question ("where can i study X with low Y")
// but never appear in our keyword lists, so they'd just add noise.
const STOPWORDS = new Set([
  "where", "can", "i", "study", "with", "for", "the", "a", "an", "to",
  "is", "are", "in", "of", "and", "or", "my", "me", "do", "does", "how",
  "what", "which", "on", "at", "as", "be", "am", "it", "this", "that"
]);

function normalize(str) {
  return (str || "").toLowerCase().trim();
}

function scoreEntry(entry, queryWords, fullQuery) {
  const titleLower = normalize(entry.title);
  const keywordsLower = normalize(entry.keywords);
  let score = entry.priority || 1; // base score = priority, so profile pages start ahead

  // Exact / near-exact title match — big boost
  if (titleLower === fullQuery) score += 20;
  if (titleLower.startsWith(fullQuery)) score += 8;

  queryWords.forEach(word => {
    if (!word || STOPWORDS.has(word)) return; // skip filler words entirely
    if (titleLower.includes(word)) score += 4;
    if (keywordsLower.includes(word)) score += 1;
  });

  return score;
}

function runSearch(query, limit = 20) {
  const q = normalize(query);
  if (!q) return [];
  const queryWords = q.split(/\s+/);

  return SEARCH_INDEX
    .map(entry => ({ entry, score: scoreEntry(entry, queryWords, q) }))
    .filter(r => r.score > (r.entry.priority || 1)) // must have an actual keyword/title match, not just base priority
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => r.entry);
}

module.exports = {
  searchPage: (req, res) => {
    const query = req.query.q || "";
    const results = runSearch(query, 30);
    res.render("./resourceFolder/searchResults", { query, results });
  },
  searchApi: (req, res) => {
    const query = req.query.q || "";
    const results = runSearch(query, 8);
    res.json({ query, results });
  }
};