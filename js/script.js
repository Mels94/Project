//pluse-minus
$(document).on('click', '.minus_plus', function () {
    if ($($(this)[0].children[0].children[0]).attr('accesskey') === '1') {
        // $(this).attr('accesskey', 0);

        $($(this)[0].children[0].children[0]).attr('accesskey', 0);
        $($(this)[0].children[0].children[0]).attr('src', 'images/b_minus.png');
    } else {
        // $(this).attr('accesskey', 1);
        $($(this)[0].children[0].children[0]).attr('accesskey', 1);
        $($(this)[0].children[0].children[0]).attr('src', 'images/b_plus.png');
    }
});


//navbar
$.ajax({
    url: "json/navbar.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        data.nav.forEach((i) => {
            $('#navigation').append(`<li>
                            <a href="#">
                                <img src="${i.img}" title="${i.title}"> ${i.name}
                            </a>
                        </li>`);

        });
    },
});


//collapse
$.ajax({
    url: "json/collapse.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        $('#collapse').append(`<div class='collapse-group'>
                                <div>
                                    <a class='btn px-0 ml-4' id="new">
                                        <img src="images/b_newdb.png" alt="newdb" title="New">
                                        New
                                    </a>
                                </div>
                            </div>`);
        data.collapse.forEach((i, index) => {
            $('.collapse-group').append(`<div class='minus_plus'>
                                        <a class='btn px-0' data-toggle='collapse' data-target='#${i.id}' 
                                                    onclick="Func(${index + 1})" title="Structure">
                                            <img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus"
                                                 accesskey="1">
                                            <img src="images/s_db.png" alt="db" title="Database operations">
                                            ${i.firstname}
                                        </a>
                                    </div>
                                    <div class='collapse in ml-4' id='${i.id}'>
                                         <div>
                                             <a class='btn'>
                                                 <img src="images/b_table_add.png" class="mr-1" alt="newtb" title="New">
                                                 New
                                             </a>
                                        </div>
                    
                                    </div>`);
            for (let j = 0; j < i.child.length; j++) {
                $('#' + i.id).append(`<div class="group">
                                        <div class='minus_plus'>
                                            <a class='btn' data-toggle='collapse' data-target='#${i.child[j].id}' title="Browse">
                                                <img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus"
                                                     accesskey="1">
                                                <img src="images/b_props.png" class="mx-1" alt="db" title="Structure">
                                                ${i.child[j].middlename}
                                            </a>
                                        </div>
                                        <div class='collapse in' id='${i.child[j].id}'>
                                            <div class='group1'>
                                                <ul class='list'></ul>
                                            </div>
                                        </div>
                                      </div>`);

                for (let k = 0; k < i.child[j].children.length; k++) {
                    $('#' + i.child[j].id).find('ul').append(`<li class="list-group">
                                            <a href="#">
                                                <img src="${i.child[j].children[k].img}" alt="db" class="mx-1" title="${i.child[j].children[k].title}">
                                                ${i.child[j].children[k].lastname}
                                            </a> 
                                       </li>`);
                }
            }
        });

    }
});


//new_db
$.ajax({
    url: "json/new_db.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        $("#new").on('click', function () {
            $("#main_pane_left").css({display: "none"});
            $("#main_pane_right").css({display: "none"});
            $("#tables").css({display: "none"});
            $("#new_database").css({display: "block"});
            $(".remove").remove();

            $('#tabledatabases').append(`<table class="table-sm remove table1">
                                            <tr id="tr_th"></tr>
                                         </table>`);

            Object.keys(data.new_db[0]).forEach(item => {
                if (item === "checkbox") {
                    item = "";
                }

                $('#tr_th').append(`<th><a>${item}</a></th>`);
            });

            $("#tabledatabases table tr").css('background-color', '#e6e6e6');
            $("#tabledatabases table tr th").css('border-right', '1px solid #FFF');
            $("#tabledatabases table tr th a").attr({href: '#'});
            $("#tabledatabases table tr th a:eq(3)").removeAttr("href");

            for (let i = 0; i < data.new_db.length; i++) {
                $('.table1').append(`<tr>
                                        <td><input type="checkbox"></td>
                                        <td><a href="#">${data.new_db[i].Database}</a></td>
                                        <td>${data.new_db[i].Collation}</td>
                                        <td><a href="#"><img src="images/s_rights.png" alt="rights">${data.new_db[i].Action}</a></td>
                                    </tr>`);
            }
            $('.table1').append(`<tr id="tr_th1"></tr>`);
            Object.keys(data.new_db[0]).forEach(item => {

                for (let k in data.new_db) {
                    if (item === "checkbox") {
                        item = "";
                    }
                    if (item === "Database") {
                        item = `Total: ${data.new_db.length}`;
                    }
                    if (item === "Collation") {
                        item = data.new_db[k].Collation;
                    }

                }
                $('#tr_th1').append(`<th>${item}</th>`);
                $("#tabledatabases table #tr_th1").css('background-color', '#e6e6e6');

                $("#dbStatsForm_checkall").click(function () {
                    $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
                });
            });
        });
    }
});


//tables
/*function Func(arg) {
    $.ajax({
        url: "json/tables.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            for (let h = 0; h < data.tables.length; h++) {

                if (arg === h + 1) {

                    $("#main_pane_left").css({display: "none"});
                    $("#main_pane_right").css({display: "none"});
                    $("#new_database").css({display: "none"});
                    $("#tables").css({display: "block"});
                    $(".remove").remove();

                    let table1 = document.getElementById("table1");
                    let table = document.createElement("table");
                    table.setAttribute('class', 'table-sm data remove');
                    table1.appendChild(table);
                    let tr = document.createElement("tr");
                    table.appendChild(tr);

                    Object.keys(data.tables[h].table[0]).forEach(item => {
                        let th = document.createElement("th");
                        th.style.borderRight = "1px solid #FFF";
                        tr.appendChild(th);
                        let a = document.createElement("a");
                        if (item === "checkbox") {
                            item = ""
                        }
                        a.innerText = item;
                        th.appendChild(a);
                    });

                    $("#table1 table tr th:eq(2)").attr('colspan', 7);
                    $("#table1 table tr").css('background-color', '#e6e6e6');
                    $("#table1 table tr th a").attr({href: '#'});
                    $("#table1 table tr th a:eq(2)").removeAttr("href");

                    for (let i = 0; i < data.tables[h].table.length; i++) {
                        let tr2 = document.createElement("tr");
                        let td = document.createElement("td");
                        let td1 = document.createElement("td");
                        let checkbox = document.createElement("input");
                        checkbox.setAttribute("type", "checkbox");
                        td1.appendChild(checkbox);
                        tr2.appendChild(td1);
                        tr2.appendChild(td);
                        let a1 = document.createElement("a");
                        a1.setAttribute('href', '#');
                        a1.innerText = data.tables[h].table[i].Table;
                        td.appendChild(a1);
                        table.appendChild(tr2);

                        for (let j = 0; j < data.tables[h].table[i].Action.length; j++) {
                            let td2 = document.createElement("td");
                            tr2.appendChild(td2);
                            let a2 = document.createElement("a");
                            a2.setAttribute('href', '#');
                            td2.appendChild(a2);
                            let img = document.createElement("img");
                            img.setAttribute('src', data.tables[h].table[i].Action[j].img);
                            a2.appendChild(img);
                            a2.innerHTML += data.tables[h].table[i].Action[j].name;
                        }

                        let td3 = document.createElement("td");
                        td3.innerText = data.tables[h].table[i].Rows;
                        tr2.appendChild(td3);
                        let td4 = document.createElement("td");
                        td4.innerText = data.tables[h].table[i].Type;
                        tr2.appendChild(td4);
                        let td5 = document.createElement("td");
                        td5.innerText = data.tables[h].table[i].Collation;
                        tr2.appendChild(td5);
                        let td6 = document.createElement("td");
                        let a3 = document.createElement("a");
                        a3.setAttribute('href', '#');
                        td6.appendChild(a3);
                        a3.innerText = data.tables[h].table[i].Size;
                        tr2.appendChild(td6);
                        let td7 = document.createElement("td");
                        td7.innerText = data.tables[h].table[i].Overhead;
                        tr2.appendChild(td7);
                    }
                    let tr3 = document.createElement("tr");
                    tr3.setAttribute('id', 'last');
                    table.appendChild(tr3);
                    Object.keys(data.tables[h].table[0]).forEach(item => {
                        let th1 = document.createElement("th");
                        tr3.appendChild(th1);
                        let p = document.createElement("p");
                        p.style.marginBottom = '0px';
                        var temp = [], temp1 = [];
                        for (let k in data.tables[h].table) {
                            if (item === "checkbox") {
                                p.innerText = ""
                            }
                            if (item === "Table") {
                                p.innerText = `${data.tables[h].table.length} tables`;
                            }
                            if (item === "Action") {
                                p.innerText = `Sum`;
                            }
                            if (item === "Rows") {
                                temp.push(+data.tables[h].table[k].Rows);
                                let sum = temp.reduce((a, b) => a + b);
                                p.innerText = sum;
                            }
                            if (item === "Type") {
                                p.innerText = `InnoDB`;
                            }
                            if (item === "Collation") {
                                p.innerText = `utf8mb4_0900_ai_ci`;
                            }
                            if (item === "Size") {
                                let size_arr = data.tables[h].table[k].Size.split(" ");
                                temp1.push(+size_arr[0]);
                                let sum1 = temp1.reduce((a, b) => a + b);
                                p.innerText = `${sum1}.0 KiB`;
                            }
                            if (item === "Overhead") {
                                p.innerText = `0 B`;
                            }
                        }
                        temp = [];
                        temp1 = [];
                        th1.appendChild(p);
                    });
                    $("#table1 table #last th:eq(2)").attr('colspan', 7);
                    $("#table1 table #last").css('background-color', '#e6e6e6');


                    $("#tablesForm_checkall").click(function(){
                        $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
                    });

                }
            }
        }
    });
}*/


function Func(arg) {
    $.ajax({
        url: "json/tables.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            for (let h = 0; h < data.tables.length; h++) {

                if (arg === h + 1) {

                    $("#main_pane_left").css({display: "none"});
                    $("#main_pane_right").css({display: "none"});
                    $("#new_database").css({display: "none"});
                    $("#tables").css({display: "block"});
                    $(".remove").remove();

                    $('#tables_user').append(`<table class="table-sm remove"><tr id="tr_th_1"></tr></table>`);

                    Object.keys(data.tables[h].table[0]).forEach(item => {
                        if (item === "checkbox") {
                            item = "";
                        }
                        $('#tr_th_1').append(`<th><a>${item}</a></th>`);
                    });

                    $("#tables_user table tr th:eq(2)").attr('colspan', 7);
                    $("#tables_user table tr").css('background-color', '#e6e6e6');
                    $("#tables_user table tr th a").attr('href', '#');
                    $("#tables_user table tr th a:eq(2)").removeAttr('href');

                    for (let i = 0; i < data.tables[h].table.length; i++) {
                        $('#tables_user table').append(`<tr id="tr_td_${i}">
                                                            <td><input type="checkbox"></td>
                                                            <td><a href="#">${data.tables[h].table[i].Table}</a></td>
                                                        </tr>`);

                        for (let j = 0; j < data.tables[h].table[i].Action.length; j++) {

                            $('#tr_td_' + i).append(`<td>
                                                    <a href="#">
                                                        <img src="${data.tables[h].table[i].Action[j].img}">
                                                        ${data.tables[h].table[i].Action[j].name}
                                                    </a>
                                                  </td>`);
                        }
                            $('#tr_td_' + i).append(`<td>${data.tables[h].table[i].Rows}</td>
                                                  <td>${data.tables[h].table[i].Type}</td>
                                                  <td>${data.tables[h].table[i].Collation}</td>
                                                  <td><a href="#">${data.tables[h].table[i].Size}</a></td>
                                                  <td>${data.tables[h].table[i].Overhead}</td>`);
                    }

                    $('#tables_user table').append(`<tr id="tr_th_2"></tr>`);

                    Object.keys(data.tables[h].table[0]).forEach(item => {
                        var temp = [], temp1 = [];
                        for (let k in data.tables[h].table) {
                            if (item === "checkbox") {
                                item = "";
                            }
                            if (item === "Table") {
                                item = `${data.tables[h].table.length} tables`;
                            }
                            if (item === "Action") {
                                item = `Sum`;
                            }
                            //console.log(temp);
                            if (item === "Rows") {
                                temp.push(+data.tables[h].table[k].Rows);
                                let sum = temp.reduce((a, b) => a + b);
                                item = sum;
                            }
                            if (item === "Type") {
                                item = `InnoDB`;
                            }
                            if (item === "Collation") {
                                item = `utf8mb4_0900_ai_ci`;
                            }
                            if (item === "Size") {
                                let size_arr = data.tables[h].table[k].Size.split(" ");
                                temp1.push(+size_arr[0]);
                                let sum1 = temp1.reduce((a, b) => a + b);
                                item = `${sum1}.0 KiB`;
                            }
                            if (item === "Overhead") {
                                item = `0 B`;
                            }
                        }
                        temp = []; temp1 = [];

                        $('#tr_th_2').append(`<th>${item}</th>`);
                    });
                    $('#tr_th_2 th:eq(2)').attr('colspan', 7);
                    $('#tr_th_2').css('background-color', '#e6e6e6');

                    $("#tablesForm_checkall").click(function(){
                        $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
                    });
                }
            }
        }
    });
}
