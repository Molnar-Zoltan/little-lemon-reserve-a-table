
export const generateStarArray = (length = 5, rating = 0, starEmpty = '☆', starFilled = '★'  ) => {

    const arr = [];

    if (length >= rating) {

        const emptyStars = length - rating;        

        if (rating > 0) {
            for (let i = 0; i < rating; i++) {
                arr.push(starFilled);
            }
        }

        if (emptyStars > 0) {
            for (let j = 0; j < emptyStars; j++) {
                arr.push(starEmpty);
            }
        }
    }

    return arr;
};