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

const deleteHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById('content').getAttribute('data-id');
    if(id){
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        };
    }
};

const editHandler = async (event) => {
    const id = document.getElementById('content').getAttribute('data-id');
    if(id){
        document.location.replace(`/post/edit/${id}`);
    }
};

document.getElementById('comment').addEventListener('click', commentHandler);
document.getElementById('edit').addEventListener('click', editHandler);
document.getElementById('delete').addEventListener('click', deleteHandler);

