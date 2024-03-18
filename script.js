function showMonth(month) {
    var monthContent = document.getElementById("monthContent");
    monthContent.style.display = "block";

    // Replace the content of monthContent based on selected month
    switch(month) {
        case 1:
            monthContent.innerHTML = `
                <h2>OCTOBER !!</h2>
                <p>Our memories from the first month together October 2023!</p>
                ${generateImageTags("month1", 3)} <!-- Assuming you have 3 screenshots for month 1 -->
                <!-- Add your images and text for Month 1 here -->
            `;
            break;
        case 2:
            monthContent.innerHTML = `
                <h2>NOVEMBER !!</h2>
                <p>Our journey continues into the second month November 2023!</p>
                ${generateImageTags("month2", 5)} <!-- Assuming you have 2 screenshots for month 2 -->
                <!-- Add your images and text for Month 2 here -->
            `;
            break;
        case 3:
                monthContent.innerHTML = `
                    <h2>DECEMBER !!</h2>
                    <p>We made it to the third month of love December 2023!</p>
                    ${generateImageTags("month3", 4)} <!-- Assuming you have 2 screenshots for month 2 -->
                    <!-- Add your images and text for Month 2 here -->
                `;
                break;
        case 4:
                monthContent.innerHTML = `
                    <h2>JANUARY !!</h2>
                        <p>We started the year togethr January 2024!</p>
                        ${generateImageTags("month4", 2)} <!-- Assuming you have 2 screenshots for month 2 -->
                        <!-- Add your images and text for Month 2 here -->
                    `;
                    break;
        case 5:
                        monthContent.innerHTML = `
                            <h2>FEBRUARY !!</h2>
                            <p>Another step into the second month of the new year and TOGETHER FEBRUARY 2024!</p>
                            ${generateImageTags("month5", 8)} <!-- Assuming you have 2 screenshots for month 2 -->
                            <!-- Add your images and text for Month 2 here -->
                        `;
                        break;
        case 6:
                            monthContent.innerHTML = `
                                <h2>MARCH !!</h2>
                                <p>The day of making this little cute project it's MARCH 2024!</p>
                                ${generateImageTags("month6", 7)} <!-- Assuming you have 2 screenshots for month 2 -->
                                <!-- Add your images and text for Month 2 here -->
                                <p style="color: red; font-weight: bold;">I LOVE YOU KWTHRRRRRRRR !!</p> <!-- Phrase for the last month -->
                                `;
                            break;             
        // Repeat the same pattern for other months...
        default:
            monthContent.innerHTML = `<p>No content available for this month.</p>`;
    }
}

// Function to generate image tags based on the number of screenshots for a month
function generateImageTags(monthName, numScreenshots) {
    var imagesHTML = "";
    for (var i = 1; i <= numScreenshots; i++) {
        imagesHTML += `<img src="images/${monthName}_${i}.jpg" alt="${monthName} Screenshot ${i}">`;
    }
    return imagesHTML;
}
