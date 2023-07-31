var sNo = 1;
let rowNo = 1;
 

// let priorityValue = 0;
// function priorityValueFinding(value){
//     priorityValue = value;
// }
function addTask() {
    let task = document.getElementById('task1')
    let description = document.getElementById('description')
    let priority = document.getElementById('Priority')
    let ToDoTb = document.getElementById('tb1')
    let newTr = document.createElement('tr')
    let tdSno = document.createElement('th')
    let tdDate = document.createElement('td')
    let tdTask = document.createElement('td')
    let tdDescription = document.createElement('td')
    let tdPriority = document.createElement('td')
    let tdCompletionDate = document.createElement('td')
    let tdStatus = document.createElement('td')
    let tdEdit = document.createElement('td')
    let tdDelete = document.createElement('td')
    let tdComplete = document.createElement('td')

    if (task.value != "" && description.value != "") {
        tdSno.innerHTML = sNo;
        sNo++;
        newTr.appendChild(tdSno)

        let currentDate = new Date().toLocaleDateString()
        tdDate.innerHTML = currentDate
        newTr.appendChild(tdDate)

        tdTask.innerHTML = task.value;
        newTr.appendChild(tdTask)

        tdDescription.innerHTML = description.value
        newTr.appendChild(tdDescription)

        tdPriority.innerHTML = priority.value

        if(Priority.value == 'High'){
            tdPriority.style.color = 'blue'
        }
        else{
            tdPriority.style.color = 'orange'
        }
        
        newTr.appendChild(tdPriority)

        tdCompletionDate.innerHTML = 'Not assigned'
        newTr.appendChild(tdCompletionDate)

        tdStatus.innerHTML = 'Pending'
        tdStatus.style.color = 'red'
        newTr.appendChild(tdStatus)

        tdEdit.innerHTML = "<button class ='btn btn-warning bg-warning ps-5 pe-5 pt-1 pb-1' onclick = 'editTask()' data-bs-toggle='modal' data-bs-target='#editModal'>Edit</button>"
        newTr.appendChild(tdEdit)

        tdDelete.innerHTML = "<button class = 'btn btn-danger bg-danger ps-4 pe-4 pt-1 pb-1' onclick = 'deleteRow()'>Delete</button>"
        newTr.appendChild(tdDelete)

        tdComplete.innerHTML = "<button class = 'btn btn-success bg-success ps-3 pe-3 pt-1 pb-1' onclick = 'taskComplete()'>Complete</button>"
        newTr.appendChild(tdComplete)

        let newRowId = 'row' + rowNo

        newTr.setAttribute('id', newRowId)
        rowNo++;


        ToDoTb.appendChild(newTr)

        document.getElementById('task1').value = ""
        document.getElementById('description').value = ""


    }
    else {
        alert('Please Fill The Form')
    }
}


function editTask() {
    let selectedRow = event.target.parentNode.parentNode
    let rowid = selectedRow.id

    let children = selectedRow.children

    document.getElementById('editTaskTxt').value = children[2].innerHTML
    document.getElementById('editTaskDesc').value = children[3].innerHTML
    document.getElementById('submit2').addEventListener('click', function () {
        updateTask(rowid)
    })
}


function updateTask(id) {
    var row = document.getElementById(id)
    let children = row.children
    children[2].innerHTML = document.getElementById('editTaskTxt').value
    children[3].innerHTML = document.getElementById('editTaskDesc').value
    editedTask = document.getElementById('editTaskTxt').value
    editedDesc = document.getElementById('editTaskDesc').value
}


function deleteRow() {
    let selectedRow = event.target.parentNode.parentNode
    
    let children = selectedRow.children
    var no =parseInt(children[0].innerHTML)
    console.log(no);
    var tb = document.getElementById('tb1')
    console.log(tb.rows[no]);

    for(let i =no; i < tb.rows.length-1; i++){
        
        console.log('length', tb.rows.length-1);
        let nextRow = tb.rows[no+1]
      console.log('row', nextRow);
       var nextRowNo = no
       console.log(nextRowNo,'next');
       let c = nextRow.children
       console.log('child', c[0].innerHTML);
       nextRow.children[0].innerHTML =  nextRowNo
       no ++
        // tb.rows[no-1].innerHTML = no - 1
    }

    selectedRow.remove()
    sNo = no
    // let nextRowId ="row" + parseInt(selectedRow.id) + 1
    // console.log(nextRowId);
}


function taskComplete() {
    let selectedRow = event.target.parentNode.parentNode
    let children = selectedRow.children
    console.log(children);
    let currentDate = new Date().toLocaleDateString()
    children[5].innerHTML = currentDate
    children[6].innerHTML = 'Completed'
    children[6].style.color = 'green'
}