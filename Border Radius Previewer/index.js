document.addEventListener("DOMContentLoaded", function() {
    const borderRadiusPreview = document.getElementById("container");
    const previewButton = document.querySelector("button");
    const borderTB = document.querySelector("input#tb");
    const borderLR = document.querySelector("input#lr");

    // Event Listeners
    previewButton.addEventListener("click", function () {
      let borderRadius = `${borderTB.value}px ${borderLR.value}px`;
      console.log(borderRadius);
      borderRadiusPreview.style.setProperty("border-radius", borderRadius);
      document.querySelector('.root').innerText = `border-radius: ${borderRadius};`;
    });

    window.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        previewButton.click();
      }
    });
});