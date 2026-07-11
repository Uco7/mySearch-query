// public/js/search.js
(function () {
  const API_URL = "/api/search"; // matches controllers/searchController.js -> searchApi
  const RESULTS_PAGE = "/search"; // matches controllers/searchController.js -> searchPage
  const DEBOUNCE_MS = 250;
  const MIN_CHARS = 2;

  const searchPairs = [];
  document.querySelectorAll(".js-search-input").forEach((input) => {
    const container = input.closest(".search-bar-container");
    if (!container) return;
    const button = container.querySelector(".js-search-btn");
    const dropdown = container.querySelector(".js-search-dropdown");
    searchPairs.push({ input, button, dropdown });
  });

  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function clearDropdown(dropdown) {
    dropdown.innerHTML = "";
    dropdown.style.display = "none";
  }

  function renderDropdown(dropdown, results, query) {
    dropdown.innerHTML = "";

    if (!results || results.length === 0) {
      const empty = document.createElement("div");
      empty.textContent = query ? `No results for "${query}"` : "";
      empty.style.cssText = "padding:0.75rem 1rem; color:#888; font-size:0.9rem;";
      if (query) {
        dropdown.appendChild(empty);
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
      return;
    }

    results.forEach((r) => {
      const item = document.createElement("a");
      item.href = r.url;
      item.style.cssText =
        "display:block; padding:0.6rem 1rem; text-decoration:none; border-bottom:1px solid #f0f0f0;";

      const titleEl = document.createElement("div");
      titleEl.textContent = r.title;
      titleEl.style.cssText = "color:#222; font-weight:600; font-size:0.95rem;";

      const subEl = document.createElement("div");
      subEl.textContent = r.subtitle || r.type;
      subEl.style.cssText = "color:#888; font-size:0.8rem; margin-top:2px;";

      item.appendChild(titleEl);
      item.appendChild(subEl);
      item.addEventListener("mouseenter", () => (item.style.background = "#f7f7f7"));
      item.addEventListener("mouseleave", () => (item.style.background = "#fff"));
      dropdown.appendChild(item);
    });

    dropdown.style.display = "block";
  }

  async function fetchResults(query) {
    try {
      const res = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error(`Search request failed: ${res.status}`);
      const data = await res.json();
      return data.results || [];
    } catch (err) {
      console.error("Search fetch error:", err);
      return [];
    }
  }

  function goToResultsPage(query) {
    const q = query.trim();
    if (!q) return;
    window.location.href = `${RESULTS_PAGE}?q=${encodeURIComponent(q)}`;
  }

  searchPairs.forEach(({ input, button, dropdown }) => {
    if (!dropdown) return;

    const handleInput = debounce(async () => {
      const query = input.value.trim();
      if (query.length < MIN_CHARS) {
        clearDropdown(dropdown);
        return;
      }
      const results = await fetchResults(query);
      renderDropdown(dropdown, results, query);
    }, DEBOUNCE_MS);

    input.addEventListener("input", handleInput);

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        goToResultsPage(input.value);
      }
      if (e.key === "Escape") {
        clearDropdown(dropdown);
        input.blur();
      }
    });

    if (button) {
      button.addEventListener("click", () => goToResultsPage(input.value));
    }

    // Hide dropdown when clicking outside this search bar
    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target) && e.target !== button) {
        clearDropdown(dropdown);
      }
    });
  });
})();