const bubbleSort = (array) => {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }

        
        if (!swapped) {
            break;
        }
    }

    return array;
};

const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(bubbleSort(a)); 
