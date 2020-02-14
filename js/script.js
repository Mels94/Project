//pluse-minus
/*$(document).on('click', '.minus_plus', function () {
    if ($($(this)[0].children[0].children[0]).attr('accesskey') === '1') {
        // $(this).attr('accesskey', 0);
        $($(this)[0].children[0].children[0]).attr('accesskey', 0);
        $($(this)[0].children[0].children[0]).attr('src', 'images/b_minus.png');
    } else {
        // $(this).attr('accesskey', 1);
        $($(this)[0].children[0].children[0]).attr('accesskey', 1);
        $($(this)[0].children[0].children[0]).attr('src', 'images/b_plus.png');
    }
});*/


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
/*$.ajax({
    url: "json/db.json",
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
                                            <a class='btn' data-toggle='collapse' data-target='#${i.child[j].id}'
                                                    title="Browse">
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
});*/


$.ajax({
    url: "json/db.json",
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
        data.db.forEach((i, index) => {
            $('.collapse-group').append(`<div class='minus_plus'>
                                        <a class='btn px-0 get-id minus_${i.id}' data-toggle='collapse' data-target='#${i.id}' data-id='${i.id}' title="Structure" aria-expanded="false">
                                              <div id="load${i.id}" class="collapse_img">
                                                 <img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus" accesskey="1">
                                              </div>
                                        </a>
                                        <a>
                                              <div class="collapse_img">
                                                 <img src="images/s_db.png" alt="db" title="Database operations">
                                              </div>
                                        </a>
                                        <a class='btn px-0 get-id minus_${i.id}' data-toggle='collapse' data-target='#${i.id}' data-id='${i.id}' title="Structure" aria-expanded="false">
                                              ${i.name}
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
        });
    }
});


$(document).on('click','.get-id',function () {
    let id = $(this).attr('data-id');
    $('.remove-' + id).remove();

    $.ajax({
        url: "json/table.json",
        type: "GET",
        dataType: "json",
        beforeSend: function(){
            $('#load' + id)[0].children[0].remove();
            if ($('.minus_' + id)[0].attributes[5].value === 'true'){
                $('#load' + id).append(`<img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus">`);
            } else {
                $('#load' + id).append(`<img src="images/ajax_clock_small.gif" alt="ajax_clock_small">`);
            }
        },
        success: function (data) {
            data.table.forEach((i, k) => {
                if (id === i.db_id){
                    $('#' + id).append(`<div class="group">
                                        <div class='minus_plus'>
                                      
                                            <a class='btn get-id-1 minus_${i.id} remove-${id}' data-toggle='collapse' data-target='#${i.id}' data-id-1='${i.id}' title="Browse" aria-expanded="false">
                                                <div id="loading${i.id}" class="collapse_img">
                                                    <img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus" accesskey="1">
                                                </div>
                                            </a>
                                            <a>
                                                <div class="collapse_img remove-${id}">
                                                     <img src="images/b_props.png" class="mx-1" alt="db" title="Structure">
                                                </div>
                                            </a>

                                            <a class='btn get-id-1 minus_${i.id} remove-${id}' data-toggle='collapse' data-target='#${i.id}' data-id-1='${i.id}' title="Browse" aria-expanded="false">
                                                ${i.name}
                                            </a>
                                        </div>
                                        <div class='collapse in ul_group' id='${i.id}'>
                                            <div class='group1'>
                                                <ul class='list'></ul>
                                            </div>
                                        </div>
                                      </div>`);
                }
            });
            setTimeout(function () {
                $('#load' + id)[0].children[0].remove();
                if ($('.minus_' + id)[0].attributes[5].value === 'false'){
                    $('#load' + id).append(`<img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus">`);
                }else {
                    $('#load' + id).append(`<img src="images/b_minus.png" alt="minus" title="Expand/Collapse" class="plusMinus">`);
                }
            }, 300);
        }
    });
});


$(document).on('click','.get-id-1',function () {
    let id = $(this).attr('data-id-1');
    $('.remove-' + id).remove();
    $.ajax({
        url: "json/columns.json",
        type: "GET",
        dataType: "json",
        beforeSend: function(){
            $('#loading' + id)[0].children[0].remove();
            if ($('.minus_' + id)[0].attributes[5].value === 'true'){
                $('#loading' + id).append(`<img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus">`);
            } else {
                $('#loading' + id).append(`<img src="images/ajax_clock_small.gif" alt="ajax_clock_small">`);
            }
        },
        success: function (data) {
            data.columns.forEach((i, k) => {
                    if (id === i.col_ind){
                            $('#' + id).append(`<li class="list-group remove-${id}">
                                            <a href="#">
                                                <img src="images/pause.png" alt="db" title="Columns">
                                                ${i.name1}
                                            </a> 
                                            <a href="#">
                                                <img src="images/b_index.png" alt="db" title="Indexes">
                                                ${i.name2}
                                            </a> 
                                       </li>`);
                    }
            });

            setTimeout(function () {

                $('#loading' + id)[0].children[0].remove();

                if ($('.minus_' + id)[0].attributes[5].value === 'false'){

                    $('#loading' + id).append(`<img src="images/b_plus.png" alt="plus" title="Expand/Collapse" class="plusMinus">`);
                }else {
                    $('#loading' + id).append(`<img src="images/b_minus.png" alt="minus" title="Expand/Collapse" class="plusMinus">`);
                }
            }, 300);

        }
    });
});






//new_db
/*$.ajax({
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
});*/


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
                    $("#tables").css({display: "none"});
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
}*/


//table_data
/*
function Func_user(arg) {
    console.log(arg);
    $.ajax({
        url: "json/responsive.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            for (let h = 0; h < data.table_data.length; h++) {


                if (arg === h + 1) {

                    $("#main_pane_left").css({display: "none"});
                    $("#main_pane_right").css({display: "none"});
                    $("#new_database").css({display: "none"});
                    $("#tables").css({display: "none"});
                    $("#table_data").css({display: "block"});
                    $(".remove").remove();




                }
            }
        }
    });
}*/
