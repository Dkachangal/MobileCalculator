function Evaluate (str) {
    let ans;
    try {
        ans = eval(str);
    } catch (error) {
        ans = "Invalid"
    }
    return ans;
} 

export default Evaluate