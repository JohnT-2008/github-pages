document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.querySelector("aside button");
    subscribeBtn.addEventListener("click", function () {
        let email = document.querySelector("aside input").value;
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            document.querySelector("aside input").value = "";
        } else {
            alert("Please enter a valid email.");
        }
    });

    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
});

function addComment() {
    let commentInput = document.getElementById("comment-input");
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let commentList = document.getElementById("comment-list");
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);

        commentInput.value = "";
    } else {
        alert("Please write a comment before posting.");
    }
}

function searchPosts() {
    let input = document.getElementById("search").value.toLowerCase();
    let posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        let title = post.querySelector("h3").textContent.toLowerCase();
        let content = post.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || content.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}