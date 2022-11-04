var at_inputsjf = document.getElementById('avt');
var bt_inputsjf = document.getElementById('bt');

function calculatesjf() {
  var at = at_inputsjf.value.split(' ');
  var bt = bt_inputsjf.value.split(' ');
  var wt = [];
  var ct = [];
  var tat = [];
  var WT_total = 0;
  var TAT_total = 0;
  var a = true;
  var st = 0;
  var f = [];
  var i = 0;
  var tot = 0;

  for (let i = 0; i < at.length; i++) {
    at[i] = Number(at[i]);
    bt[i] = Number(bt[i]);
  }

  if ((at, bt)) {
    var index_array = [];
    for (i = 0; i < bt.length; i++) {
      index_array[i] = i;
    }

    for (i = 0; i < bt.length; i++) {
      f[i] = 0;
    }
    while (a) {
      var c = bt.length;
      var min = 999;
      if (tot == bt.length) {
        break;
      }
      for (i = 0; i < bt.length; i++) {
        if (
          at[index_array[i]] <= st &&
          f[index_array[i]] == 0 &&
          bt[index_array[i]] < min
        ) {
          min = bt[index_array[i]];
          c = index_array[i];
        }
      }
      if (c == bt.length) {
        st++;
      } else {
        ct[index_array[c]] = st + bt[index_array[c]];
        st = st + bt[index_array[c]];
        tat[index_array[c]] = ct[index_array[c]] - at[index_array[c]];
        wt[index_array[c]] = tat[index_array[c]] - bt[index_array[c]];
        f[index_array[c]] = 1;
        tot++;
      }
    }
  }
  let n = at.length;
  let output = new Array(n);
  for (let i = 0; i < n; i++) {
    let col = new Array(6);
    col[0] = at[i];
    col[1] = bt[i];
    col[2] = ct[i];
    col[3] = tat[i];
    col[4] = wt[i];
    col[5] = i + 1;
    output[i] = col;
  }
  console.log('from sjf');
  return output;
}
// 0->at
// 1->bt
// 2->ct
// 3->tat
// 4->wt
// 5->index
