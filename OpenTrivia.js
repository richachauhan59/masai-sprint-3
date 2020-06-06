
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

var type = document.getElementById('type').value
var div_main = document.getElementById("main")
var Q_A = {

}
function display() {
    event.preventDefault()
    var number = document.querySelector('input').value
    var category = document.getElementById('category').value

   

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
                    if (type == "boolean"){
                    var div = document.createElement('div')
                    var q = document.createElement("h2")
                    var q_string = "Question : " + result.results[i].question
                    q.textContent = q_string
                    Q_A[q_string] = result.results[i].correct_answer
                    var btn_true = document.createElement('input')
                    var btn_false = document.createElement('input')
                    function setAttributes(el, attrs) {
                        for (var key in attrs) {
                            el.setAttribute(key, attrs[key]);
                        }
                    }
                    setAttributes(btn_true, { 'type': 'button', "id": "true", "name": "True", "value": "True" ,})
                    setAttributes(btn_false, { 'type': 'button', "id": "false", "name": "False", "value": "False" })
                    div.append(q, btn_true, btn_false)
                    div_main.appendChild(div)
                    }

                    else if (type == "multiple") {
                        var div = document.createElement('div')
                        var q = document.createElement("h2")
                        var q_string = "Question : " + result.results[i].question
                        q.textContent = q_string
                        Q_A[q_string] = result.results[i].correct_answer
                        // var btn_true = document.createElement('input')
                        // var btn_false = document.createElement('input')
                        // function setAttributes(el, attrs) {
                        //     for (var key in attrs) {
                        //         el.setAttribute(key, attrs[key]);
                        //     }
                        // }
                        var arr = []
                        arr.push(result.results[i].correct_answer)
                        var arr1 = arr.concat(result.results[i].incorrect_answer)
                        console.log(arr1)
                        // var ans_div = document.createElement('div')
                        // var h3 = document.createElement('h3')
                        // h3.textContent = 

                        

                    }

                }
            }

        }
    }

}

div_main.addEventListener("click", click, true)

function click(){
    var c_ans = Q_A[event.target.parentNode.children[0].innerHTML]
    if (type == "boolean"){
        if (c_ans == event.target.value){
            event.target.parentNode.style = "background-color: green"
            alert("Correct Answer")
            
        }
        else{
            event.target.parentNode.style = "background-color: red"
            alert("Wrong Answer")
            
        } 
    }
     
    else if (type == "multiple"){

    }

     

}
    //         var result = JSON.parse(xhr.response)
    //         result.items = result.items.splice(0,9)

    //         for (var i = 0; i < result.items.length ; i++){

    //         var div = document.querySelector('div')
    //         var p = document.createElement("p")
    //         p.textContent = "Name : " + result["items"][i]["full_name"]
    //         div.appendChild(p)

    //         var ul = document.createElement("ul")
    //         var li1 = document.createElement("li")
    //         li1.textContent = "Language of repository is : " + result["items"][i]["language"]
    //         var li2 = document.createElement("li")
    //         var repo_link = document.createElement('a')
    //         repo_link.setAttribute('href', result["items"][i]["html_url"])
    //         repo_link.textContent = result["items"][i]["html_url"]
    //         li2.textContent = "Link to repository is : "
    //         li2.appendChild(repo_link)
    //         var li3 = document.createElement("li")
    //         li3.textContent = "Description : " + result["items"][i]["description"]

    //         ul.appendChild(li1)
    //         ul.appendChild(li2)
    //         ul.appendChild(li3)
    //         div.appendChild(ul)

    //         }

    //     }
    //     else {
    //         console.log("Error Code is:" + xhr.status)
    //     }
    // }