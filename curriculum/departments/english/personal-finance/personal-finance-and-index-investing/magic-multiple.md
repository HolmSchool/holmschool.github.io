---
id: 5a9d726cfbfab3f2f1111014
title: Magic Multiple
challengeType: 3
videoUrl: 
# forumTopicId: 301086
dashedName: magic-multiple
ghissue: 529
menAuthor: 
---

# --description--

- Magic Multiple algorithm via the Rule of 72
  - Allocation: (age * 1.5)% allocation to Total Stock Market and (100 - (age * 1.5))% allocation to Small Cap Value.
  - Assumes 10% average long-term return on Total Stock Market and 12% average long-term return on Small Cap Value (nominal, not real).
  - Minimum allocation to SCV is 20%, maximum allocation to TSM is 80%.
  - Assumes retirement at age 65.
  - Python code: ```mm = lambda age: 2**((65-age)/(72/((10 * min((age * 1.5)/100, .8))  + (12 * max((100 - (age * 1.5))/100, .2)))))```
  - Estimated return to a maxed-out Roth IRA ($6000/year) and maxed-out 401k ($19,500) @ retirement at age 65
  - | Age | Magic Multiple | Maxed-out IRA @ 65 value | Maxed-out 401k @ 65 value |
    |-----|--------------------|--------------------------|-----------------|
    | mm(15) | 259.7 | $1,558,200 | - |
    | mm(20) | 139.5 | $837,000 | $2,720,250 |
    | mm(25) | 76.1 | $456,600 | $1,483,950 |
    | mm(30) | 42.1 | $252,600 | $820,950 |
    | mm(35) | 23.6 | $141,600 | $460,200 |
    | mm(40) | 13.5 | $81,000 | $263,250 |
    | mm(45) | 7.8 | $46,800 | $152,100 |
    | mm(50) | 4.6 | $27,600 | $89,700 |
    | mm(55) | 2.7 | $16,200 | $52,650 |
    | mm(60) | 1.6 | $9,600 | $31,200 |
    | mm(65) | 1 | $6,000 | $19,500 |
  - Cost of Each Year of College at Washburn - 4 classes per semester @ $1100 per class (-$8800/year) => -~$4 million from retirement
    | Age | Magic Multiple | Opportunity Cost @ 65 |
    | -----|---------|-----------------------|
    | mm(19) | 157.86 | -$1,389,168 |
    | mm(20) | 139.58 | -$1,228,304 |
    | mm(21) | 123.5 | -$1,086,800 |
    | mm(22) | 109.33 | -$962,104 |
  - Cost of one coffee at age 19: ```$-2.70 * mm(19) = $-426``` (!!!)

# --instructions--

Click "completed" when done reading.