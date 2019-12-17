$(document).ready(function () {

//pluse-minus
    $(document).on('click', '.plusMinus', function () {
        if ($(this).attr('accesskey') === '1') {
            $(this).attr('accesskey', 0);
            $(this).attr('src', '../images/b_minus.png');
        } else {
            $(this).attr('accesskey', 1);
            $(this).attr('src', '../images/b_plus.png');
        }
        console.log($(this).attr('accesskey'));
    });


//navbar
    $.ajax({
        url: "../json/new_db/navbar_new.json",
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
        url: "../json/collapse.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            data.collapse.forEach((i) => {
                let col = document.getElementById("collapse");
                let div = document.createElement("div");
                div.setAttribute('class', 'collapse-group');
                col.appendChild(div);
                let div_new = document.createElement("div");
                let a2 = document.createElement("a");
                a2.setAttribute('href', 'new_db.html');
                a2.setAttribute('class', 'btn px-0 ml-4');
                div_new.appendChild(a2);
                let img4 = document.createElement("img");
                img4.setAttribute('src', '../images/b_newdb.png');
                img4.setAttribute('class', 'mr-1');
                img4.setAttribute('alt', 'newdb');
                img4.setAttribute('title', 'New');
                a2.appendChild(img4);
                a2.innerHTML += "New";
                div.appendChild(div_new);
                let minus_plus = document.createElement("div");
                minus_plus.setAttribute('class', 'minus_plus');
                div.appendChild(minus_plus);
                let a = document.createElement("a");
                a.setAttribute('href', 'page/tables.html');
                a.setAttribute('class', 'btn px-0');
                a.setAttribute('data-toggle', 'collapse');
                a.setAttribute('data-target', '#' + i.id);
                a.setAttribute('id', 'page_content');
                minus_plus.appendChild(a);
                let img1 = document.createElement("img");
                img1.setAttribute('src', '../images/b_plus.png');
                img1.setAttribute('alt', 'plus');
                img1.setAttribute('title', 'Expand/Collapse');
                img1.setAttribute('class', 'plusMinus');
                img1.setAttribute('accesskey', '1');
                a.appendChild(img1);
                let img2 = document.createElement("img");
                img2.setAttribute('src', '../images/s_db.png');
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
                    img1.setAttribute('src', '../images/b_plus.png');
                    img1.setAttribute('alt', 'plus');
                    img1.setAttribute('title', 'Expand/Collapse');
                    img1.setAttribute('class', 'plusMinus');
                    img1.setAttribute('accesskey', '1');
                    a.appendChild(img1);
                    let img3 = document.createElement("img");
                    img3.setAttribute('src', '../images/b_props.png');
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






});