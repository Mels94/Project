$(document).ready(function () {
/*    var count = 0;
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
                $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
                $(this).find(".collapse").removeClass("show")
            });
        }
        count++;
    });*/


$(document).on('click','.plusMinus',function () {
    if ($(this).attr('accesskey') === '1'){
        $(this).attr('accesskey',0);
        $(this).attr('src','images/b_minus.png');
    }else {
        $(this).attr('accesskey',1);
        $(this).attr('src','images/b_plus.png');
    }
    console.log($(this).attr('accesskey'));
});

var nav = [
    {name:"Databases", img:"images/s_db.png", title: "Databases"},
    {name:"SQL", img:"images/b_sql.png", title: "SQL"},
    {name:"Status", img:"images/s_status.png", title: "Status"},
    {name:"User accounts", img:"images/s_rights.png", title: "User accounts"},
    {name:"Export", img:"images/b_export.png", title: "Export"},
    {name:"Import", img:"images/b_import.png", title: "Import"},
    {name:"Settings", img:"images/b_tblops.png", title: "Settings"},
    {name:"Replication", img:"images/s_replication.png", title: "Replication"},
    {name:"Variables", img:"images/s_vars.png", title: "Variables"},
    {name:"Charsets", img:"images/s_asci.png", title: "Charsets"},
    {name:"Engines", img:"images/b_engine.png", title: "Engines"},
    {name:"Plugins", img:"images/b_plugin.png", title: "Plugins"}
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


var collapse = [
    {
        firstname:"Registracia",
        id:"demoout",
        child:[
            {
                middlename:"User",
                id:"demoin",
                children:[
                    {lastname:"Karen"},
                    {lastname:"Lilit"},
                    {lastname:"Arman"}
                ]
            },
            {
                middlename:"User_ID",
                id:"demoin1",
                children: [
                    {lastname:"2"},
                    {lastname:"5"},
                    {lastname:"13"}
                ]
            },
            {
                middlename:"Friend_ID",
                id:"demoin2",
                children: [
                    {lastname:"12"},
                    {lastname:"8"},
                    {lastname:"14"}
                ]
            }
        ]
    }
];
collapse.forEach((i) => {
/*    let col = document.getElementById("collapse");
    let div = document.createElement("div");
    div.setAttribute('class', 'collapse-group');
    col.appendChild(div);
    let div1 = document.createElement("div");
    div1.setAttribute('class', 'minus_plus');
    div.appendChild(div1);
    let a = document.createElement("a");
    a.setAttribute('class', 'btn px-0');
    a.setAttribute('data-toggle', 'collapse');
    a.setAttribute('data-target', i.id);
    div1.appendChild(a);
    let img1 = document.createElement("img");
    img1.setAttribute('src', 'images/b_plus.png');
    img1.setAttribute('alt', 'plus');
    img1.setAttribute('title', 'Expand/Collapse');
    img1.setAttribute('class', 'plusMinus');
    img1.setAttribute('accesskey', '1');
    a.appendChild(img1);
    let img2 = document.createElement("img");
    img2.setAttribute('src', 'images/s_db.png');
    img2.setAttribute('alt', 'db');
    img2.setAttribute('title', 'Database operations');
    a.appendChild(img2);
    a.innerHTML += i.firstname;

    console.log(i);
    console.log(i.child);

    for (let j = 0; j < i.child.length; j++) {
        console.log(i.child[j]);

        let div_in = document.createElement("div");
        div_in.setAttribute('class', 'collapse in');
        div_in.setAttribute('id', i.id);
        col.appendChild(div_in);
        let div_group = document.createElement("div");
        div_group.setAttribute('class', 'collapse-group');
        div_in.appendChild(div_group);

        //div_group.appendChild(div1);



        for (let k = 0; k < i.child[j].children.length; k++) {
            console.log(i.child[j].children[k]);
        }
    }*/

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




