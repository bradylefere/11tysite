module.exports = function(eleventyConfig) {
  // passthrough so styles and images are copied to _site
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Reusable shortcode for homepage cards
  eleventyConfig.addShortcode("itemCard", function(title, img, shortDesc, why, link) {
    link = link || "#";
    return `
      <article class="card">
        <img src="${img}" alt="${title}" class="card-img" />
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${shortDesc}</p>
          <p class="card-why"><strong>Why:</strong> ${why}</p>
          <p class="card-link"><a class="btn-primary" href="${link}">Read more</a></p>
        </div>
      </article>
    `;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
