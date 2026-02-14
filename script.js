
    const stories = {
    book1: "Book 1 begins... A storm tears across the sky as destiny awakens.",
    book2: "Book 2 continues... Power grows. Alliances fracture.",
    book3: "Book 3 rises... The war begins.",
    book4: "Book 4 deepens... Secrets unfold.",
    book5: "Book 5 escalates... A betrayal changes everything.",
    book6: "Book 6 intensifies...",
    book7: "Book 7 transforms...",
    book8: "Book 8 shifts...",
    book9: "Book 9 explodes...",
    book10: "Book 10 trembles...",
    book11: "Book 11 expands...",
    book12: "Book 12 darkens...",
    book13: "Book 13 reveals...",
    book14: "Book 14 shatters...",
    book15: "Book 15 concludes..."
};

const selector = document.getElementById("bookSelector");
const storyText = document.getElementById("storyText");

selector.addEventListener("change", function() {
    const selectedBook = selector.value;
    storyText.textContent = stories[selectedBook];
});;
