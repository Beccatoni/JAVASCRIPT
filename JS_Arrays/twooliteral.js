const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makelist(arr){
    "use strict";
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li`);
    return failureItems;
}

console.log(makelist(result.failure));

