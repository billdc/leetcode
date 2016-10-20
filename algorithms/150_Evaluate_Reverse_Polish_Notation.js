var evalRPN = function(tokens) {
    if (tokens.length == 1) {
        return parseInt(tokens[0]);
    }
    var stack = [];
    var a, b;
    for (var i = 0; i < tokens.length; i++) {
        if (isNaN(tokens[i])) {
            b = stack.pop();
            a = stack.pop();
            if (tokens[i] == "+") {
                stack.push(a + b);
            } else if (tokens[i] == "-") {
                stack.push(a - b);
            } else if (tokens[i] == "*") {
                stack.push(a * b);
            } else if (tokens[i] == "/") {
                if (a / b < 0) {
                    stack.push(Math.ceil(a / b));
                } else {
                    stack.push(Math.floor(a / b));
                }
            }
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};
