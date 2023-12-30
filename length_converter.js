function cmtoinches()
{
    const user_input = document.getElementById("cm")
    const user_result = document.getElementById("result")
    const user_value = Number(user_input.value)
    const user_result_value = user_value / 2.54
    user_result.innerHTML = "Result is " + user_result_value.toFixed(4) + " inches"
}



