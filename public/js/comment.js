const commentHandler = async (event) => {
    event.preventDefault();

    // Collect values from the post and comment form
    const comment = document.querySelector('#commentText').value.trim();
    const id = document.getElementById('content').getAttribute('data-id');

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, reload page to show new comment
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('comment').addEventListener('click', commentHandler);
