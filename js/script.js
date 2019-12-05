$(document).ready(function () {
    var count = 0
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });

    $(".collapse-parent").on('click', function () {
        if (count % 2 == 0) {
            $(this).find(".fa").removeClass("fa-plus").addClass("fa-minus");
        } else {
            $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
            $(".collapse").on('hide.bs.collapse', function () {
                console.log("aaaaaaa")
                $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
                $(this).find(".collapse").removeClass("show")
            });
        }
        count++
    });


var nav = [
    {name:"Databases", img:"img/dat.png", title: "Databases"},
    {name:"SQL", img:"img/sql.png", title: "SQL"},
    {name:"Status", img:"img/stat.png", title: "Status"},
    {name:"User accounts", img:"img/user.png", title: "User accounts"},
    {name:"Export", img:"img/exp.png", title: "Export"},
    {name:"Import", img:"img/imp.png", title: "Import"},
    {name:"Settings", img:"img/set.png", title: "Settings"},
    {name:"Replication", img:"img/rep.png", title: "Replication"},
    {name:"Variables", img:"img/var.png", title: "Variables"},
    {name:"Charsets", img:"img/chars.png", title: "Charsets"},
    {name:"Engines", img:"img/eng.png", title: "Engines"},
    {name:"Plugins", img:"img/plug.png", title: "Plugins"}
];
nav.forEach((i)=>{
    let ul = document.getElementById("navigation");
    let li = document.createElement("li");
    li.setAttribute('class', 'border-right');
    ul.appendChild(li);
    let a = document.createElement("a");
    a.setAttribute('href', '#');
    li.appendChild(a);
    let img = document.createElement("img");
    img.setAttribute('src', i.img);
    img.setAttribute('title', i.title);

    a.appendChild(img);
    a.innerHTML += i.name;
});




    $("#table").on('click', function () {
        $(".remove").remove();

        $("#table1").append(
            "<table class='table table-sm mt-3 mx-3 remove'>" +
            "<thead>" +
            "<tr class='bg-light'>" +
            "<th></th>" +
            "<th>Table</th>" +
                  "<th>Action</th>" +
                  "<th>Rows</th>" +
                  "<th>Type</th>" +
                  "<th>Collation</th>" +
                  "<th>Size</th>" +
                  "<th>Overhead</th>" +
                "</tr>" +
              "</thead>" +
              "<tbody>" +
                "<tr>" +
                  "<th><input type='checkbox' name='check' value='check1'></th>" +
                  "<td>User</td>" +
                  "<td>Browse Structure Search Insert Empty Drop</td>" +
                  "<td>4</td>" +
                  "<td>InnoDB</td>" +
                  "<td>utf8_general_ci</td>" +
                  "<td>32 KiB</td>" +
                  "<td>-</td>" +
                "</tr>" +
                "<tr>" +
                  "<th><input type='checkbox' name='check' value='check2'></th>" +
                  "<td>User_ID</td>" +
                  "<td>Browse Structure Search Insert Empty Drop</td>" +
                  "<td>5</td>" +
                  "<td>InnoDB</td>" +
                  "<td>utf8_general_ci</td>" +
                  "<td>16 KiB</td>" +
                  "<td>-</td>" +
                "</tr>" +
                "<tr>" +
                  "<th><input type='checkbox' name='check' value='check3'></th>" +
                  "<td>Friend_ID</td>" +
                  "<td>Browse Structure Search Insert Empty Drop</td>" +
                  "<td>12</td>" +
                  "<td>InnoDB</td>" +
                  "<td>utf8_general_ci</td>" +
                  "<td>48 KiB</td>" +
                  "<td>-</td>" +
                "</tr>" +
                "<tr class='bg-light'>" +
                  "<th></th>" +
                  "<th># tables</th>" +
                  "<th>Sum</th>" +
                  "<th>117</th>" +
                  "<th>InnoDB</th>" +
                  "<th>utf8_general_ci</th>" +
                  "<th>560 KiB</th>" +
                  "<th>0 B</th>" +
                "</tr>" +
              "</tbody>" +
            "</table>" +

            "<div class='mx-3 remove'>" +
            "<i class=\"fa fa-long-arrow-alt-up\"></i>" +
            "<input type = 'checkbox' class='ml-4' id = 'all' name = 'check_all'>" +
            "<label for= 'all'>Check All</label>" +
            "<select class='ml-5'>" +
            "<option value='selected'>With selected:</option>" +
            "<option value='export'>Export</option>" +
            "<option value='print'>Print view</option>" +
            "<option value='empty'>Empty</option>" +
            "</select>" +
            "</div>");
    });


});




