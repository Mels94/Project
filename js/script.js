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


//pluse-minus
    $(document).on('click', '.plusMinus', function () {
        if ($(this).attr('accesskey') === '1') {
            $(this).attr('accesskey', 0);
            $(this).attr('src', 'images/b_minus.png');
        } else {
            $(this).attr('accesskey', 1);
            $(this).attr('src', 'images/b_plus.png');
        }
        console.log($(this).attr('accesskey'));
    });



    $.ajax({
        url: "json/navbar.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            nav.forEach((i) => {
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
        },
    });

    // let http = new XMLHttpRequest();
    // http.open('GET','json/navbar.json',false);
    // http.setRequestHeader("Content-Type", "application/json");
    // http.send();
    // console.log(http.response);


//collapse
    var collapse = [
        {
            firstname: "Registracia",
            id: "demoout",
            child: [
                {
                    middlename: "User",
                    id: "demoin",
                    children: [
                        {lastname: "Karen"},
                        {lastname: "Lilit"},
                        {lastname: "Arman"}
                    ]
                },
                {
                    middlename: "User_ID",
                    id: "demoin1",
                    children: [
                        {lastname: "2"},
                        {lastname: "5"},
                        {lastname: "13"}
                    ]
                },
                {
                    middlename: "Friend_ID",
                    id: "demoin2",
                    children: [
                        {lastname: "12"},
                        {lastname: "8"},
                        {lastname: "14"}
                    ]
                }
            ]
        },
    ];





    collapse.forEach((i) => {
        let col = document.getElementById("collapse");
        let div = document.createElement("div");
        div.setAttribute('class', 'collapse-group');
        col.appendChild(div);
        let minus_plus = document.createElement("div");
        minus_plus.setAttribute('class', 'minus_plus');
        div.appendChild(minus_plus);
        let a = document.createElement("a");
        a.setAttribute('class', 'btn px-0');
        a.setAttribute('data-toggle', 'collapse');
        a.setAttribute('data-target', '#' + i.id);
        a.setAttribute('id', 'table');
        minus_plus.appendChild(a);
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

        for (let j = 0; j < i.child.length; j++) {
            let div_in = document.createElement("div");
            div_in.setAttribute('class', 'collapse in');
            div_in.setAttribute('id', i.id);
            div.appendChild(div_in);
            let div_group = document.createElement("div");
            div_group.setAttribute('class', 'collapse-group');
            div_in.appendChild(div_group);

            let minus_plus1 = document.createElement("div");
            minus_plus1.setAttribute('class', 'minus_plus');
            div_group.appendChild(minus_plus1);
            let a = document.createElement("a");
            a.setAttribute('class', 'btn');
            a.setAttribute('data-toggle', 'collapse');
            a.setAttribute('data-target', '#' + i.child[j].id);
            minus_plus1.appendChild(a);
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
            a.innerHTML += i.child[j].middlename;
            let div_in1 = document.createElement("div");
            div_in1.setAttribute('class', 'collapse in');
            div_in1.setAttribute('id', i.child[j].id);
            div_group.appendChild(div_in1);
            let div_group1 = document.createElement("div");
            div_group1.setAttribute('class', 'collapse-group');
            div_in1.appendChild(div_group1);
            let ul = document.createElement("ul");
            ul.setAttribute('class', 'list');
            div_group1.appendChild(ul);

            for (let k = 0; k < i.child[j].children.length; k++) {
                let li = document.createElement("li");
                li.setAttribute('class', 'list-group');
                ul.appendChild(li);
                let a1 = document.createElement("a");
                a1.setAttribute('href', '#');
                li.appendChild(a1);
                a1.innerHTML += i.child[j].children[k].lastname;
            }
        }
    });

    var table_us = [
        {
            checkbox:"fdsfsdf",
            Table:"User",
            Action:[
                {img:"images/b_no_favorite.png",name:""},
                {img:"images/bd_browse.png", name:"Browse"},
                {img:"images/b_props.png", name:"Structure"},
                {img:"images/bd_select.png", name:"Search"},
                {img:"images/b_insrow.png", name:"Insert"},
                {img:"images/bd_empty.png", name:"Empty"},
                {img:"images/b_drop.png", name:"Drop"}
                ],
            Rows:"4",
            Type:"InnoDB",
            Collation:"utf8mb4_0900_ai_ci",
            Size:"32.0 KiB",
            Overhead:"-"
        },
        {
            checkbox:"fdsfsdf",
            Table:"User_ID",
            Action:[
                {img:"images/b_no_favorite.png",name:""},
                {img:"images/bd_browse.png", name:"Browse"},
                {img:"images/b_props.png", name:"Structure"},
                {img:"images/bd_select.png", name:"Search"},
                {img:"images/b_insrow.png", name:"Insert"},
                {img:"images/bd_empty.png", name:"Empty"},
                {img:"images/b_drop.png", name:"Drop"}
            ],
            Rows:"5",
            Type:"InnoDB",
            Collation:"utf8mb4_0900_ai_ci",
            Size:"16.0 KiB",
            Overhead:"-"
        },
        {
            checkbox:"fdsfsdf",
            Table:"Friend_ID",
            Action:[
                {img:"images/b_no_favorite.png", name:""},
                {img:"images/bd_browse.png", name:"Browse"},
                {img:"images/b_props.png", name:"Structure"},
                {img:"images/bd_select.png", name:"Search"},
                {img:"images/b_insrow.png", name:"Insert"},
                {img:"images/bd_empty.png", name:"Empty"},
                {img:"images/b_drop.png", name:"Drop"}
            ],
            Rows:"4512",
            Type:"InnoDB",
            Collation:"utf8mb4_0900_ai_ci",
            Size:"16.0 KiB",
            Overhead:"-"
        },
    ];


    $("#table").on('click', function () {
        $(".remove").remove();
        let table1 = document.getElementById("table1");
        let table = document.createElement("table");
        table.setAttribute('class', 'table-sm mx-3 remove');
        table1.appendChild(table);
        let tr = document.createElement("tr");
        table.appendChild(tr);

        Object.keys(table_us[0]).forEach(item => {
            let th = document.createElement("th");
            th.style.borderRight = "1px solid #FFF"
            tr.appendChild(th);
            let a = document.createElement("a");
            if(item === "checkbox"){
                item = ""
            }
            a.innerText = item;
            th.appendChild(a);

        });

        $("#table1 table tr th:eq(2)").attr('colspan', 7);
        $("table tr").css('background-color','#e6e6e6');
        $("#table1 table tr th a").attr({href: '#'});
        $("#table1 table tr th a:eq(2)").removeAttr("href");

        for (let i = 0; i < table_us.length; i++) {
            let tr2 = document.createElement("tr");
            //console.log(table_us[i].Action);
            let td = document.createElement("td");
            let td1 = document.createElement("td");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox")
            td1.appendChild(checkbox)
            tr2.appendChild(td1);
            tr2.appendChild(td);
            let a1 = document.createElement("a");
            a1.setAttribute('href', '#');
            a1.innerText = table_us[i].Table;
            td.appendChild(a1);
            table.appendChild(tr2);


            for (let j = 0; j < table_us[i].Action.length; j++) {
                let td2 = document.createElement("td");
                tr2.appendChild(td2);
                let a2 = document.createElement("a");
                a2.setAttribute('href', '#');
                td2.appendChild(a2);
                let img = document.createElement("img");
                img.setAttribute('src', table_us[i].Action[j].img);
                a2.appendChild(img);
                a2.innerHTML += table_us[i].Action[j].name;

            }

            let td3 = document.createElement("td");
            td3.innerText = table_us[i].Rows;
            tr2.appendChild(td3);
            let td4 = document.createElement("td");
            td4.innerText = table_us[i].Type;
            tr2.appendChild(td4);
            let td5 = document.createElement("td");
            td5.innerText = table_us[i].Collation;
            tr2.appendChild(td5);
            let td6 = document.createElement("td");
            let a3 = document.createElement("a");
            a3.setAttribute('href', '#');
            td6.appendChild(a3);
            a3.innerText = table_us[i].Size;
            tr2.appendChild(td6);
            let td7 = document.createElement("td");
            td7.innerText = table_us[i].Overhead;
            tr2.appendChild(td7);
        }






/*                $("#table1").append(
                    "<table class='table table-sm mx-3 remove'>" +
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
                    "</div>");*/
    });


});

    var nav = [
        {
            "name": "Databases",
            "img": "images/s_db.png",
            "title": "Databases"
        },
        {
            "name": "SQL",
            "img": "images/b_sql.png",
            "title": "SQL"
        },
        {
            "name": "Status",
            "img": "images/s_status.png",
            "title": "Status"
        },
        {
            "name": "User accounts",
            "img": "images/s_rights.png",
            "title": "User accounts"
        },
        {
            "name": "Export",
            "img": "images/b_export.png",
            "title": "Export"
        },
        {
            "name": "Import",
            "img": "images/b_import.png",
            "title": "Import"
        },
        {
            "name": "Settings",
            "img": "images/b_tblops.png",
            "title": "Settings"
        },
        {
            "name": "Replication",
            "img": "images/s_replication.png",
            "title": "Replication"
        },
        {
            "name": "Variables",
            "img": "images/s_vars.png",
            "title": "Variables"
        },
        {
            "name": "Charsets",
            "img": "images/s_asci.png",
            "title": "Charsets"
        },
        {
            "name": "Engines",
            "img": "images/b_engine.png",
            "title": "Engines"
        },
        {
            "name": "Plugins",
            "img": "images/b_plugin.png",
            "title": "Plugins"
        }
    ]



