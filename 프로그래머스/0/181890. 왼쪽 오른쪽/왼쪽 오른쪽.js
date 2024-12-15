function solution(str_list) {
  if (!str_list.includes("l") && !str_list.includes("r")) {
    return [];
  }

  for (const char of str_list) {
    if (char === "l") {
      console.log("----", str_list.slice(0, str_list.indexOf("l")));
      return str_list.slice(0, str_list.indexOf("l"));
    } else if (char === "r") {
      console.log("----", str_list.slice(str_list.indexOf("r") + 1));
      return str_list.slice(str_list.indexOf("r") + 1);
    }
  }
}