document.addEventListener('DOMContentLoaded', function () {

   // declaration variables
   let navbar = document.querySelector('.navbar');
   let menu = document.querySelector('menu');
   let bars = document.querySelectorAll('.bar span');
   let sections = document.querySelectorAll("section");
   let liLinks = document.querySelectorAll("menu a");
   const categoryButtons = document.querySelectorAll('.category-title');
   const allCategoryPosts = document.querySelectorAll('.card');

   // Burger button 
   navbar.addEventListener('click', () => menu.classList.toggle('wide'));

   // Scroll Header
   window.addEventListener("scroll", function () {
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
      ;
   })


   // Fill skills bar
   bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.setProperty('--fill-width', percent + '%');
   });


   // Scroll section when click on voice menu
   const resetLinks = () => {
      liLinks.forEach((link) => link.classList.remove('active'));
   };

   const handleScroll = () => {
      const { pageYOffset } = window;

      sections.forEach(section => {
         const { id, offsetTop, clientHeight } = section;
         const offset = offsetTop - 1;
         
         if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
            resetLinks();
            liLinks.forEach(link => {
               if (link.dataset.scroll === id) {
                  link.classList.add("active");
               }
            });
         }
      });
   }

   document.addEventListener("scroll", handleScroll);


   // Filter portfolio categories 
   categoryButtons.forEach(button => {
      button.addEventListener('click', function () {
         const selectedCategory = button.dataset.category;
         filterPosts(selectedCategory);
         changeActivePosition(button);
      });
   });

   function filterPosts(category) {
      allCategoryPosts.forEach(post => {
         if (category === 'all' || post.classList.contains(category)) {
            post.style.display = 'block';
         } else {
            post.style.display = 'none';
         }
      });
   }

   function changeActivePosition(activeButton) {
      categoryButtons.forEach(button => {
         button.classList.remove('active-category');
      });
      activeButton.classList.add('active-category');
   }

});



