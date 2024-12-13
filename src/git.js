let nums = [-1,1,2,3,1], target = 2,  count = 0

var countPairs = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        // console.log("element", element);
        nums.filter((v, i, a) => {
            if ((a[i + 1]) === undefined) return false
            // console.log(a.indexOf(v),nums.indexOf(element), "dd");
            console.log("index < i+1", index < i + 1);
            if (index < i + 1) {
                // console.log("pppp=>", element == a[i + 1]);
                // if (element != a[i + 1]) {
                    console.log("sum", element, (a[i + 1]), element + (a[i + 1]), (element + (a[i + 1])) < target);
                    if ((element + (a[i + 1])) < target) count++
                // }
            }
        })
    }
    console.log("count", count);
    return count // coment
};

countPairs(nums, target)
