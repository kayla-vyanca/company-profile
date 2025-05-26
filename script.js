const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Hapus class active dari semua link
      navLinks.forEach(nav => nav.classList.remove("active"));

      // Tambahkan class active ke link yang diklik
      this.classList.add("active");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    function duplicateItems(containerSelector) {
      const container = document.querySelector(containerSelector);
      if (container) {
        const items = Array.from(container.children);
        items.forEach(item => {
          const clone = item.cloneNode(true);
          container.appendChild(clone);
        });
      }
    }

    // Duplikasi untuk #track1 dan .services-grid
    duplicateItems("#track1");
    duplicateItems(".services-wrapper-2 .services-grid");
  });

