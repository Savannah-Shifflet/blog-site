const saveHandler = async(event) => {
    event.preventDefault();
    const id = document.getElementById('post-content').getAttribute('data-id');
    const title = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }
    }
};

document.getElementById('save').addEventListener('click', saveHandler);