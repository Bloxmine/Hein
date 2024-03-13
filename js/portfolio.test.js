// Test Case 1
// Ensure that the animation delay is set correctly for each star element
const mockStars = [
    { style: {} },
    { style: {} },
    { style: {} }
];
document.getElementsByClassName = jest.fn(() => mockStars);
getRandomNumber = jest.fn(() => 2); // Mocking getRandomNumber function to always return 2

animateStars();

expect(mockStars[0].style.animationDelay).toBe('2s');
expect(mockStars[1].style.animationDelay).toBe('2s');
expect(mockStars[2].style.animationDelay).toBe('2s');