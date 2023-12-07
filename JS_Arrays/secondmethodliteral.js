const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

  function makelist(arr){
    const failureItems = [];
    for (let i = 0; i<arr.length; i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  const failuresList = makelist(result.failure);
  console.log(failuresList);