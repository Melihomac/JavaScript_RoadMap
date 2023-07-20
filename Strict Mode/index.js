"use strict";
const v = "Hi! I'm a strict mode script!";

'use strict';
let x = 3.14;

// Deleting a function is also not allowed
'use strict';
function x(p1, p2) { };

// Will throw an error
// delete x;     