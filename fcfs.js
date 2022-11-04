const arrival_time_inputs = document.getElementById('avt');
const burst_time_inputs = document.getElementById('bt');
function calc(inputs) {
  let n = inputs.length;
  var wt = new Array(n);
  wt[0] = 0;
  for (let i = 1; i < n; i++) {
    // wt[i] = at[i - 1] + bt[i - 1] + wt[i - 1] - at[i];
    wt[i] = inputs[i - 1][0] + inputs[i - 1][1] + wt[i - 1] - inputs[i][0];
  }

  return wt;
}
function calculatefcfs() {
  var at = arrival_time_inputs.value.split(' ');
  var bt = burst_time_inputs.value.split(' ');
  let n = at.length;

  // index array
  var inda = new Array(n);

  // input array
  let inputs = new Array(n);
  for (let i = 0; i < n; i++) {
    inda[i] = i + 1;
    let col = new Array(6);
    col[0] = Number(at[i]);
    col[1] = Number(bt[i]);
    inputs[i] = col;
  }
  for (let i = 0; i < n; i++) {
    inputs[i][5] = inda[i];
  }
  inputs.sort((a, b) => a[0] - b[0]);
  let wt = calc(inputs);
  for (let i = 0; i < n; i++) {
    inputs[i][4] = wt[i];
  }
  inputs.sort((a, b) => a[5] - b[5]);
  // let ct = new Array(n);
  // let tat = new Array(n);
  for (let i = 0; i < n; i++) {
    // tat[i] = inputs[i][4] + inputs[i][1];
    // ct[i] = inputs[i][0] + inputs[i][1] + inputs[i][4];
    inputs[i][3] = inputs[i][4] + inputs[i][1];
    inputs[i][2] = inputs[i][0] + inputs[i][1] + inputs[i][4];
  }
  // 0->at
  // 1->bt
  // 2->ct
  // 3->tat
  // 4->wt
  // 5->index
  // console.log('final', inputs);
  console.log('from fcfs');
  return inputs;
}
