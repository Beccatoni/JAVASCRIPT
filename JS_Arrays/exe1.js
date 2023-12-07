function peakElement(arr, n){
    n = arr.length;

    if (n === 1){
        return arr[0];
    }

    for (let i = 0; i< arr.length; i++){
        if (i === 0){
            if (arr[i + 1] > arr[i]){
                return arr[i+1]
            }
            else if (i === n-1){
                if (arr[i -1] < arr[i]){
                    return arr[i];
                }
            }
            else if (arr[i-1] < arr[i] && arr[i] > arr[i+1]){
                return arr[i];
            }
        }
    }
}