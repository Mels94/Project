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
/*    $(document).on('click', '.plusMinus', function () {
        if ($(this).attr('accesskey') === '1') {
            $(this).attr('accesskey', 0);
            $(this).attr('src', 'images/b_minus.png');
        } else {
            $(this).attr('accesskey', 1);
            $(this).attr('src', 'images/b_plus.png');
        }
        console.log($(this).attr('accesskey'));
    });*/

    //pluse-minus
    $(document).on('click', '.minus_plus', function () {
        if ($($(this)[0].children[0].children[0]).attr('accesskey') === '1') {
            // $(this).attr('accesskey', 0);

            $($(this)[0].children[0].children[0]).attr('accesskey',0);
            $($(this)[0].children[0].children[0]).attr('src', 'images/b_minus.png');
        } else {
            // $(this).attr('accesskey', 1);
            $($(this)[0].children[0].children[0]).attr('accesskey',1);
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
            let div_new = document.createElement("div");
            let a2 = document.createElement("a");
            a2.setAttribute('class', 'btn px-0 ml-4');
            a2.setAttribute('id', 'new');
            div_new.appendChild(a2);
            let img4 = document.createElement("img");
            img4.setAttribute('src', 'images/b_newdb.png');
            img4.setAttribute('class', 'mr-1');
            img4.setAttribute('alt', 'newdb');
            img4.setAttribute('title', 'New');
            a2.appendChild(img4);
            a2.innerHTML += "New";
            col.appendChild(div_new);
            data.collapse.forEach((i) => {
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
                a.setAttribute('id', 'page_content');
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
                img2.setAttribute('class', 'mx-1');
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
                    let img3 = document.createElement("img");
                    img3.setAttribute('src', 'images/b_props.png');
                    img3.setAttribute('class', 'mx-1');
                    img3.setAttribute('alt', 'db');
                    img3.setAttribute('title', 'Database operations');
                    a.appendChild(img3);
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
                $("#table_user").css({display: "none"});
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
                    if(item === "checkbox"){
                        item = ""
                    }
                    a.innerText = item;
                    th.appendChild(a);
                });

                $("#tabledatabases table tr").css('background-color','#e6e6e6');
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
                    tr2.appendChild(td1);
                    let a1 = document.createElement("a");
                    a1.setAttribute('href', '#');
                    a1.innerText = data.new_db[i].Database;
                    td1.appendChild(a1);
                    table.appendChild(tr2);
                    let td2 = document.createElement("td");
                    td2.innerText = data.new_db[i].Collation;
                    tr2.appendChild(td2);
                    let td3 = document.createElement("td");
                    let img = document.createElement("img");
                    img.setAttribute('src', 'images/s_rights.png');
                    img.setAttribute('alt', 'rights');
                    img.setAttribute('title', 'Check privileges');
                    td3.appendChild(img);
                    td3.innerHTML += "&nbsp;" + data.new_db[i].Action;
                    tr2.appendChild(td3);
                }

                let tr3 = document.createElement("tr");
                tr3.setAttribute('id', 'last');
                table.appendChild(tr3);
                Object.keys(data.new_db[0]).forEach(item => {
                    let th1 = document.createElement("th");
                    tr3.appendChild(th1);
                    let p = document.createElement("p");
                    p.style.marginBottom = '0px';
                    for (let k in data.new_db){
                        if(item === "checkbox"){
                            p.innerText = ""
                        }
                        if (item === "Database"){
                            p.innerText = `Total: ${data.new_db.length}`;
                        }
                        if (item === "Collation"){
                            p.innerText = data.new_db[k].Collation;
                        }
                    }

                    th1.appendChild(p)
                });
                $("#tabledatabases table #last").css('background-color','#e6e6e6');

            });
        }
    });


    //table_us
    $.ajax({
        url: "json/table_us.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $("#page_content").on('click', function () {
            $("#main_pane_left").css({display: "none"});
            $("#main_pane_right").css({display: "none"});
            $("#new_database").css({display: "none"});
            $("#table_user").css({display: "block"});
            $(".remove").remove();

            let table1 = document.getElementById("table1");
            let table = document.createElement("table");
            table.setAttribute('class', 'table-sm data remove');
            table1.appendChild(table);
            let tr = document.createElement("tr");
            table.appendChild(tr);

            Object.keys(data.table_us[0]).forEach(item => {
                let th = document.createElement("th");
                th.style.borderRight = "1px solid #FFF";
                tr.appendChild(th);
                let a = document.createElement("a");
                if(item === "checkbox"){
                    item = ""
                }
                a.innerText = item;
                th.appendChild(a);
            });

            $("#table1 table tr th:eq(2)").attr('colspan', 7);
            $("#table1 table tr").css('background-color','#e6e6e6');
            $("#table1 table tr th a").attr({href: '#'});
            $("#table1 table tr th a:eq(2)").removeAttr("href");

            for (let i = 0; i < data.table_us.length; i++) {
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
                a1.innerText = data.table_us[i].Table;
                td.appendChild(a1);
                table.appendChild(tr2);

                for (let j = 0; j < data.table_us[i].Action.length; j++) {
                    let td2 = document.createElement("td");
                    tr2.appendChild(td2);
                    let a2 = document.createElement("a");
                    a2.setAttribute('href', '#');
                    td2.appendChild(a2);
                    let img = document.createElement("img");
                    img.setAttribute('src', data.table_us[i].Action[j].img);
                    a2.appendChild(img);
                    a2.innerHTML += data.table_us[i].Action[j].name;
                }

                let td3 = document.createElement("td");
                td3.innerText = data.table_us[i].Rows;
                tr2.appendChild(td3);
                let td4 = document.createElement("td");
                td4.innerText = data.table_us[i].Type;
                tr2.appendChild(td4);
                let td5 = document.createElement("td");
                td5.innerText = data.table_us[i].Collation;
                tr2.appendChild(td5);
                let td6 = document.createElement("td");
                let a3 = document.createElement("a");
                a3.setAttribute('href', '#');
                td6.appendChild(a3);
                a3.innerText = data.table_us[i].Size;
                tr2.appendChild(td6);
                let td7 = document.createElement("td");
                td7.innerText = data.table_us[i].Overhead;
                tr2.appendChild(td7);
            }

            let tr3 = document.createElement("tr");
            tr3.setAttribute('id', 'last');
            table.appendChild(tr3);
            Object.keys(data.table_us[0]).forEach(item => {
                let th1 = document.createElement("th");
                tr3.appendChild(th1);
                let p = document.createElement("p");
                p.style.marginBottom = '0px';
                var temp = [], temp1 = [];
                for (let k in data.table_us){
                    if(item === "checkbox"){
                        p.innerText = ""
                    }
                    if (item === "Table"){
                        p.innerText = `${data.table_us.length} tables`;
                    }
                    if (item === "Action"){
                        p.innerText = `Sum`;
                    }
                    if (item === "Rows"){
                        temp.push(+data.table_us[k].Rows);
                        let sum = temp.reduce((a, b) => a + b);
                        p.innerText = sum;
                    }
                    if (item === "Type"){
                        p.innerText = `InnoDB`;
                    }
                    if (item === "Collation"){
                        p.innerText = `utf8mb4_0900_ai_ci`;
                    }
                    if (item === "Size"){
                        let size_arr = data.table_us[k].Size.split(" ");
                        temp1.push(+size_arr[0]);
                        let sum1 = temp1.reduce((a, b) => a + b);
                        p.innerText = `${sum1}.0 KiB`;
                    }
                    if (item === "Overhead"){
                        p.innerText = `0 B`;
                    }
                }
                temp = [];
                temp1 = [];
                th1.appendChild(p)
            });
            $("#table1 table #last th:eq(2)").attr('colspan', 7);
            $("#table1 table #last").css('background-color','#e6e6e6');



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


            });
        }
    });





/*    $('#buttonGo').on('click', function () {
        var name = $('#text_create_db').val();
        var collation = $( "select[name=db_collation] option:selected" ).text();
        alert();

        var sendInfo = {
            Name: name,
            Collation: collation
        };

        $.ajax({
            url: "json/new_db.json",
            type: "POST",
            dataType: "json",
            success: function (msg) {
                if (msg) {
                    alert("Somebody" + name + " was added in list !");
                    location.reload(true);
                } else {
                    alert("Cannot add to list !");
                }
            },
            data: sendInfo
        })

    });*/



});