function buildTable(arr) {
  const part2 = document.querySelector('#table');
  part2.innerHTML = '';
  var mytable = '<table>';
  let i = 0,
    j = 0;
  for (var CELL of arr) {
    mytable += `<tr class="r${i}">`;
    for (var CELLi of CELL) {
      mytable += `<td class="c${j}">` + CELLi + '</td>';
      j++;
    }
    j = 0;
    mytable += '</tr>';
    i++;
  }

  mytable += '</table>';
  console.log(mytable);
  part2.innerHTML = mytable;
}

function calculate() {
  const choosen = document.getElementById('choosen').value;
  console.log(choosen);
  let finalResult = [];
  if (choosen === 'fcfs') finalResult = calculatefcfs();
  else if (choosen === 'sjf') finalResult = calculatesjf();
  else if (choosen === 'hrrn') finalResult = calculatehrrn();
  else if (choosen === 'priority') finalResult = calculatesjf();
  // console.log(finalResult);

  let n = finalResult.length;
  let tat_total = 0;
  let wt_total = 0;

  var output = new Array(n + 1);
  var row1 = new Array(6);
  row1[0] = 'Process';
  row1[1] = 'Arrival Time';
  row1[2] = 'Burst Time';
  row1[3] = 'Finish Time';
  row1[4] = 'Turnaround Time';
  row1[5] = 'Waiting Time';
  output[0] = row1;
  for (let i = 0; i < n; i++) {
    var col = new Array(6);
    col[0] = finalResult[i][5];
    col[1] = finalResult[i][0];
    col[2] = finalResult[i][1];
    col[3] = finalResult[i][2];
    col[4] = finalResult[i][3];
    col[5] = finalResult[i][4];
    output[i + 1] = col;
    tat_total += output[i + 1][4];
    wt_total += output[i + 1][5];
  }
  // 0->at
  // 1->bt
  // 2->ct
  // 3->tat
  // 4->wt
  // 5->index
  // console.log(output);
  buildTable(output);
  // console.log(tat_total / n);
  // console.log(wt_total / n);
  generateSummary(tat_total / n, wt_total / n, choosen);
}
function generateSummary(tat_total, wt_total, choosen) {
  const summaryDiv = document.querySelector('.summary-div');
  summaryDiv.innerHTML = `
  <h2>Summary:- </h2>
  <button class="summaryBtn">${choosen}</button>
  <p>Average Turnaround Time = ${tat_total}</p>
  <p>Average Waiting Time = ${wt_total}</p>
  `;
}
