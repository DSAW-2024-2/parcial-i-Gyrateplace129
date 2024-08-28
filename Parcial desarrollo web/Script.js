const shareBtn = document.getElementById('share-btn');
const shareContainer = document.querySelector('.share-container');
shareBtn.addEventListener('click', function () {
  shareContainer.classList.toggle('active'); 
});
