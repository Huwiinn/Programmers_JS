function solution(my_string) {
    const result = my_string.split(" ").filter((v) => v !== "");
    return result
}