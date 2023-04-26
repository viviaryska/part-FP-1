        const readMoreBtns = document.querySelectorAll('.read-more');
		const popup = document.querySelector('#popup');
		const popupTitle = document.querySelector('#popup-title');
		const popupContent = document.querySelector('#popup-content');
		const backBtn = document.querySelector('.back');

		readMoreBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				const postId = btn.getAttribute('data-id');
				const post = document.querySelector(`.post[data-id="${postId}"]`);
				const title = post.querySelector('h2').textContent;
				const content = post.querySelector('p').textContent;

				popupTitle.textContent = title;
				popupContent.textContent = content;

				popup.classList.add('active');
			});
		});

		backBtn.addEventListener('click', () => {
			popup.classList.remove('active');
		});