// main.js

const postsList = [
  {
    title: \"Markdown Örneği\",
    file: \"posts/markdown-ornek.md\",
    image: \"assets/sample.jpg\"
  }
];

function createPostHTML(title, htmlContent, image) {
  const article = document.createElement(\"article\");
  article.className = \"post\";
  article.innerHTML = `
    <img src=\"${image}\" alt=\"${title}\" />
    <div class=\"post-title\">${title}</div>
  `;
  article.addEventListener(\"click\", () => {
    document.body.innerHTML = `<article style='padding: 1rem;'>${htmlContent}</article>`;
  });
  return article;
}

async function loadPosts() {
  const container = document.getElementById(\"posts\");
  for (const post of postsList) {
    const res = await fetch(post.file);
    const text = await res.text();
    const html = window.marked.parse(text);
    const el = createPostHTML(post.title, html, post.image);
    container.appendChild(el);
  }
}

window.onload = async () => {
  await import('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
  loadPosts();
};
