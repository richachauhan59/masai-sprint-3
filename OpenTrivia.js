function form() {
    event.preventDefault()
    var category = document.getElementById('category')
    var xhr_form = new XMLHttpRequest()
    var link_1 = 'https://opentdb.com/api_category.php'
    xhr_form.open('GET', link_1)
    xhr_form.send()

    xhr_form.onload = function () {
        if (xhr_form.status == 200) {
            var result = JSON.parse(xhr_form.response)
            for (var i = 0; i < result.trivia_categories.length; i++) {
                var option = document.createElement("option")
                option.textContent = result.trivia_categories[i].name
                option.setAttribute('value', result.trivia_categories[i].id)
                category.appendChild(option)
            }

        }
    }
}

var div_main = document.getElementById("main")
var Q_A = {

}

function display() {
    event.preventDefault()
    var type = document.getElementById('type').value

    var number = document.querySelector('input').value
    var category = document.getElementById('category').value


    console.log(type)
    var xhr = new XMLHttpRequest()
    var link = 'https://opentdb.com/api.php?amount=' + number + '&category=' + category + '&type=' + type
    xhr.open('GET', link)
    xhr.send()

    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            if (result.response_code == 0) {
                //console.log(result);
                for (var i = 0; i < result.results.length; i++) {
                    if (type == "boolean") {
                        var div = document.createElement('div')
                        var q = document.createElement("h2")
                        var q_string = "Question : " + result.results[i].question
                        q.textContent = q_string
                        Q_A[q_string] = result.results[i].correct_answer
                        var btn_true = document.createElement('input')
                        var l_true = document.createElement('label')
                        l_true.textContent = "TRUE"
                        var btn_false = document.createElement('input')
                        var l_false = document.createElement('label')
                        l_false.textContent = "FALSE"

                        function setAttributes(el, attrs) {
                            for (var key in attrs) {
                                el.setAttribute(key, attrs[key]);
                            }
                        }
                        setAttributes(btn_true, {
                            'type': 'radio',
                            "name": "Option",
                            "value": "True",
                        })
                        setAttributes(btn_false, {
                            'type': 'radio',
                            "name": "Option",
                            "value": "False"
                        })
                        div.append(q, btn_true, l_true, btn_false, l_false)
                        div_main.appendChild(div)
                    } else if (type == "multiple") {
                        var div = document.createElement('div')
                        var q = document.createElement("h2")
                        var q_string = "Question : " + result.results[i].question
                        q.textContent = q_string
                        Q_A[q_string] = result.results[i].correct_answer
                        var arr = []
                        arr.push(result.results[i].correct_answer)
                        var arr = arr.concat(result.results[i].incorrect_answers)
                        arr = arr.sort()

                        var opt_1 = document.createElement('input')
                        var opt_1_label = document.createElement('label')
                        var opt_2 = document.createElement('input')
                        var opt_2_label = document.createElement('label')
                        var opt_3 = document.createElement('input')
                        var opt_3_label = document.createElement('label')
                        var opt_4 = document.createElement('input')
                        var opt_4_label = document.createElement('label')
                        opt_1_label.textContent = arr[0]
                        opt_2_label.textContent = arr[1]
                        opt_3_label.textContent = arr[2]
                        opt_4_label.textContent = arr[3]

                        function setAttributes(el, attrs) {
                            for (var key in attrs) {
                                el.setAttribute(key, attrs[key]);
                            }
                        }

                        setAttributes(opt_1, {
                            'type': 'radio',
                            "name": "Option",
                            "value": arr[0]
                        })
                        setAttributes(opt_2, {
                            'type': 'radio',
                            "name": "Option",
                            "value": arr[1]
                        })
                        setAttributes(opt_3, {
                            'type': 'radio',
                            "name": "Option",
                            "value": arr[2]
                        })
                        setAttributes(opt_4, {
                            'type': 'radio',
                            "name": "Option",
                            "value": arr[3]
                        })

                        div.append(q, opt_1, opt_1_label, opt_2, opt_2_label, opt_3, opt_3_label, opt_4, opt_4_label)
                        div_main.appendChild(div)

                    }

                }
            }

        }
    }

}

div_main.addEventListener("click", click, true)

function click() {
    var c_ans = Q_A[event.target.parentNode.children[0].innerHTML]
    if (c_ans == event.target.value && event.target.localName == 'input') {
        event.target.parentNode.style = "background-color: rgb(112, 234, 112)"

    } else if (event.target.localName == 'input') {
        event.target.parentNode.style = "background-color: rgb(226, 88, 88)"

    }
}