var menuitem = document.getElementsByClassName("menu-item");
console.log(menuitem);
for (var i = 0; i < menuitem.length; i++) {
    current = menuitem[i];
    var asideimage = document.getElementById("aside-image");
    asideimage.removeAttribute("class");
    var image = current.nextElementSibling;

    image.setAttribute("class", "hide");
    current.onclick = function () {
        var image = this.nextElementSibling;
        var src = image.getAttribute("src");
        asideimage.setAttribute("src", src);
        //onclick = "myFunction()" > onclick
    }
}