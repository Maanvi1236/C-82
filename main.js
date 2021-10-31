canvas = document.getElementById("myCanvas");
color = document.getElementById("color");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown)
MouseEvent = "empty"

function my_mousedown(e) {
    color = document.getElementById("colors").value;
    width = document.getElementById("width").value;
    MouseEvent = "mousedown";

}
canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e) {
    MouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e) {
    MouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (MouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.line_width = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}

function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}