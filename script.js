  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Cart count and notification
  const addToBagButtons = document.querySelectorAll('.add-to-bag');
  const cartCount = document.getElementById('cartCount');

  // Create notification element dynamically
  const notification = document.createElement('div');
  notification.id = 'notification';
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);

  let count = 0;

  addToBagButtons.forEach(button => {
    button.addEventListener('click', () => {
      count++;
      cartCount.textContent = count;

      // Show notification
      notification.classList.add('show');

      // Hide notification after 2 seconds
      setTimeout(() => {
        notification.classList.remove('show');
      }, 2000);
    });
  });
