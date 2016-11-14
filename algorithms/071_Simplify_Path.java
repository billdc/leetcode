public String simplifyPath(String path) {
    String[] p = path.split("/");
    ArrayList<String> stack = new ArrayList<>();
    for (int i = 0; i < p.length; i++) {
        if (p[i].equals("") || p[i].equals(".") || p[i].equals("/")) continue;
        if (!p[i].equals("..")) {
            stack.add(p[i]);
        } else if (p[i].equals("..")) {
            if (stack.size() > 0) {
                stack.remove(stack.size() - 1);
            }
        }
    }
    if (stack.size() == 0) {
        return "/";
    }
    String res = "";
    for (String s : stack) {
        res = res + "/" + s;
    }
    return res;
}
