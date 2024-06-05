const boxes = document.querySelectorAll(".box");
let draggedImage = null;

document.querySelectorAll(".image").forEach(image => {
    image.addEventListener("dragstart", (e) => {
        draggedImage = e.target;
    });
});

boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.classList.add("hovered");
    });

    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    box.addEventListener("drop", () => {
        if (draggedImage) {
            const targetImage = box.querySelector(".image");
            const sourceBox = draggedImage.parentElement;
            box.appendChild(draggedImage);
            sourceBox.appendChild(targetImage);
            box.classList.remove("hovered");
            draggedImage = null;
        }
    });
});
