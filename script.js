let currentPage = 1;
const totalPages = 3;

function showPage(pageNum) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    page.style.display = (index + 1 === pageNum) ? 'block' : 'none';
  });
}

function nextPage() {
  currentPage = (currentPage % totalPages) + 1;
  showPage(currentPage);
}

function prevPage() {
  currentPage = (currentPage - 2 + totalPages) % totalPages + 1;
  showPage(currentPage);
}

document.addEventListener("DOMContentLoaded", () => {
  showPage(currentPage); // show first page on load
});
