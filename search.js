
const articles = [
  { title: "Introduction to Candy", path: "blog/intro.html" },
  { title: "How to Build", path: "blog/build.html" },
  { title: "Feature Breakdown", path: "blog/features.html" },
  { title: "Security & Ethics", path: "blog/security.html" },
];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  resultsList.innerHTML = '';

  if (!query) return;

  const filtered = articles.filter(article => article.title.toLowerCase().includes(query));
  filtered.forEach(article => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = article.path;
    a.textContent = article.title;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
});
