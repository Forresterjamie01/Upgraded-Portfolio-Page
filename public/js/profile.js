const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#Triplog-name').value.trim();
    const description = document.querySelector('#Tripog-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/Triplogs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create Triplog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/Triplogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete Triplog');
      }
    }
  };
  
  document
    .querySelector('.new-Triplog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.Triplog-list')
    .addEventListener('click', delButtonHandler);