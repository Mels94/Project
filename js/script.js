
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


//collapse
$.ajax({
    url: "json/collapse.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        let col = document.getElementById("collapse");
        let div = document.createElement("div");
        div.setAttribute('class', 'collapse-group');
        col.appendChild(div);
        let div_new = document.createElement("div");
        let a = document.createElement("a");
        a.setAttribute('class', 'btn px-0 ml-4');
        a.setAttribute('id', 'new');
        // a.setAttribute('onclick', 'Func(0)');
        let img = document.createElement("img");
        img.setAttribute('src', 'images/b_newdb.png');
        img.setAttribute('class', 'mr-1');
        img.setAttribute('alt', 'newdb');
        a.appendChild(img);
        a.innerHTML += "New";
        div_new.appendChild(a);
        div.appendChild(div_new);

        data.collapse.forEach((i, index) => {
            let minus_plus = document.createElement("div");
            minus_plus.setAttribute('class', 'minus_plus');
            let a1 = document.createElement("a");
            a1.setAttribute('class', 'btn px-0');
            a1.setAttribute('data-toggle', 'collapse');
            a1.setAttribute('data-target', '#' + i.id);
            a1.setAttribute('onclick', 'Func(' + (index + 1) + ')');
            a1.setAttribute('title', 'Structure');
            //a1.setAttribute('id', 'page_content');
            minus_plus.appendChild(a1);
            let img1 = document.createElement("img");
            img1.setAttribute('src', 'images/b_plus.png');
            img1.setAttribute('alt', 'plus');
            img1.setAttribute('title', 'Expand/Collapse');
            img1.setAttribute('class', 'plusMinus');
            img1.setAttribute('accesskey', '1');
            a1.appendChild(img1);
            let img2 = document.createElement("img");
            img2.setAttribute('src', 'images/s_db.png');
            img2.setAttribute('class', 'mx-1');
            img2.setAttribute('alt', 'db');
            img2.setAttribute('title', 'Database operations');
            a1.appendChild(img2);
            a1.innerHTML += i.firstname;
            div.appendChild(minus_plus);
            let div_in = document.createElement("div");
            div_in.setAttribute('class', 'collapse in ml-4');
            div_in.setAttribute('id', i.id);
            div.appendChild(div_in);
            let div_new1 = document.createElement("div");
            let a2 = document.createElement("a");
            a2.setAttribute('class', 'btn');
            div_new1.appendChild(a2);
            let img3 = document.createElement("img");
            img3.setAttribute('src', 'images/b_table_add.png');
            img3.setAttribute('class', 'mr-1');
            img3.setAttribute('alt', 'newtb');
            img3.setAttribute('title', 'New');
            a2.appendChild(img3);
            a2.innerHTML += "New";
            div_in.appendChild(div_new1);

            for (let j = 0; j < i.child.length; j++) {
                let div_group = document.createElement("div");
                div_group.setAttribute('class', 'collapse-group');
                div_in.appendChild(div_group);
                let minus_plus1 = document.createElement("div");
                minus_plus1.setAttribute('class', 'minus_plus');
                let a3 = document.createElement("a");
                a3.setAttribute('class', 'btn');
                a3.setAttribute('data-toggle', 'collapse');
                a3.setAttribute('data-target', '#' + i.child[j].id);
                a3.setAttribute('title', 'Browse');
                minus_plus1.appendChild(a3);
                let img4 = document.createElement("img");
                img4.setAttribute('src', 'images/b_plus.png');
                img4.setAttribute('alt', 'plus');
                img4.setAttribute('title', 'Expand/Collapse');
                img4.setAttribute('class', 'plusMinus');
                img4.setAttribute('accesskey', '1');
                a3.appendChild(img4);
                let img5 = document.createElement("img");
                img5.setAttribute('src', 'images/b_props.png');
                img5.setAttribute('class', 'mx-1');
                img5.setAttribute('alt', 'db');
                img5.setAttribute('title', 'Structure');
                a3.appendChild(img5);
                a3.innerHTML += i.child[j].middlename;
                div_group.appendChild(minus_plus1);
                let div_in1 = document.createElement("div");
                div_in1.setAttribute('class', 'collapse in');
                div_in1.setAttribute('id', i.child[j].id);
                let div_group1 = document.createElement("div");
                div_group1.setAttribute('class', 'collapse-group');
                div_in1.appendChild(div_group1);
                let ul = document.createElement("ul");
                ul.setAttribute('class', 'list');
                div_group1.appendChild(ul);
                div_group.appendChild(div_in1);

                for (let k = 0; k < i.child[j].children.length; k++) {
                    let li = document.createElement("li");
                    li.setAttribute('class', 'list-group');
                    ul.appendChild(li);
                    let a4 = document.createElement("a");
                    a4.setAttribute('href', '#');
                    li.appendChild(a4);
                    let img6 = document.createElement("img");
                    img6.setAttribute('src', i.child[j].children[k].img);
                    img6.setAttribute('alt', 'db');
                    img6.setAttribute('class', 'mx-1');
                    img6.setAttribute('title', i.child[j].children[k].title);
                    a4.appendChild(img6);
                    a4.innerHTML += i.child[j].children[k].lastname;
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

            let tabledatabases = document.getElementById("tabledatabases");
            let table = document.createElement("table");
            table.setAttribute('class', 'table-sm data remove');
            tabledatabases.appendChild(table);
            let tr = document.createElement("tr");
            table.appendChild(tr);

            Object.keys(data.new_db[0]).forEach(item => {
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

            $("#tabledatabases table tr").css('background-color', '#e6e6e6');
            $("#tabledatabases table tr th a").attr({href: '#'});
            $("#tabledatabases table tr th a:eq(3)").removeAttr("href");

            for (let i = 0; i < data.new_db.length; i++) {
                let tr2 = document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                td.appendChild(checkbox);
                tr2.appendChild(td);
                let a1 = document.createElement("a");
                a1.setAttribute('href', '#');
                a1.innerText = data.new_db[i].Database;
                td1.appendChild(a1);
                tr2.appendChild(td1);
                let td2 = document.createElement("td");
                td2.innerText = data.new_db[i].Collation;
                tr2.appendChild(td2);
                let td3 = document.createElement("td");
                let a2 = document.createElement("a");
                a2.setAttribute('href', '#');
                let img = document.createElement("img");
                img.setAttribute('src', 'images/s_rights.png');
                img.setAttribute('alt', 'rights');
                img.setAttribute('title', 'Check privileges');
                a2.appendChild(img);
                a2.innerHTML += "&nbsp;" + data.new_db[i].Action;
                td3.appendChild(a2);
                tr2.appendChild(td3);
                table.appendChild(tr2);
            }

            let tr3 = document.createElement("tr");
            tr3.setAttribute('id', 'last');
            table.appendChild(tr3);
            Object.keys(data.new_db[0]).forEach(item => {
                let th1 = document.createElement("th");
                tr3.appendChild(th1);
                let p = document.createElement("p");
                p.style.marginBottom = '0px';
                for (let k in data.new_db) {
                    if (item === "checkbox") {
                        p.innerText = ""
                    }
                    if (item === "Database") {
                        p.innerText = `Total: ${data.new_db.length}`;
                    }
                    if (item === "Collation") {
                        p.innerText = data.new_db[k].Collation;
                    }
                }

                th1.appendChild(p)
            });
            $("#tabledatabases table #last").css('background-color', '#e6e6e6');

            $("#dbStatsForm_checkall").click(function(){
                $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
            });

        });
    }
});


//table_us
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


                    /*                let table1_chack = document.createElement("div");
                                    table1_chack.setAttribute('id', 'table1_chack');
                                    table1_chack.setAttribute('class', 'remove');
                                    //let table1_chack = document.getElementById("table1_chack");
                                    let img1 = document.createElement("img");
                                    img1.setAttribute('class', 'selectallarrow');
                                    img1.setAttribute('src', 'images/arrow_ltr.png');
                                    img1.setAttribute('alt', 'arrow');
                                    table1_chack.appendChild(img1);
                                    let input2 = document.createElement("input");
                                    input2.setAttribute('type', 'checkbox');
                                    input2.setAttribute('id', 'tablesForm_checkall');
                                    input2.setAttribute('class', 'checkall_box');
                                    input2.setAttribute('title', 'Check all');
                                    table1_chack.appendChild(input2);
                                    let label = document.createElement("label");
                                    label.setAttribute('for', 'tablesForm_checkall');
                                    label.innerText = "Check all";
                                    table1_chack.appendChild(label);
                                    let select = document.createElement("select");
                                    select.setAttribute('class', 'select_bar');
                                    select.setAttribute('name', 'submit_mult');
                                    let option = document.createElement("option");
                                    option.setAttribute('value', 'With selected');
                                    option.innerText = "With selected";
                                    select.appendChild(option);
                                    table1_chack.appendChild(select);

                                    tableslist.appendChild(table1_chack);*/
                }
            }
        }
    });
}

