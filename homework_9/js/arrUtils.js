;!function () {
    window.arrUtils = {
        min: function (arr) {
            let min = arr[0];
            for (let i = 1; i < arr.length - 1; i++) {
                if (min > arr[i + 1]) {
                    min = arr[i + 1];
                }
            }
            return min;
        },
        max: function (arr) {
            let max = arr[0];
            for (let i = 1; i < arr.length - 1; i++) {
                if (max < arr[i + 1]) {
                    max = arr[i + 1];
                }
            }
            return max;
        },
        average: function (arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum / arr.length;
        },
        clone: function (arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                newArr.push(arr[i]);
            }
            return newArr;
        },
    };
}();
