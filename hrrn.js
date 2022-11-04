var at_inputhrrn = document.getElementById('avt');
var bt_inputhrrn = document.getElementById('bt');

function calculatehrrn() {
  var at = at_inputhrrn.value.split(' ');
  var bt = bt_inputhrrn.value.split(' ');
  var bt_total = 0;
  var wt = [];
  var ct = [];
  var tat = [];
  var checked = [];
  var wt_total = 0;
  var tat_total = 0;
  let n = at.length;
  for (let i = 0; i < at.length; i++) {
    at[i] = Number(at[i]);
    bt[i] = Number(bt[i]);
  }
  if ((at, bt)) {
    var index_array = [];
    for (i = 0; i < at.length; i++) {
      index_array[i] = i;
      bt_total += bt[i];
      checked[i] = false;
    }
    for (i = 0; i < at.length; i++) {
      for (j = 0; j < at.length - 1; j++) {
        if (at[index_array[j]] > at[index_array[j + 1]]) {
          var temp = index_array[j];
          index_array[j] = index_array[j + 1];
          index_array[j + 1] = temp;
        }
      }
    }
    for (i = 0; i < at.length; i++) {
      if (i == 0) {
        ct[index_array[i]] = at[index_array[i]] + bt[index_array[i]];
      } else {
        ct[index_array[i]] = ct[index_array[i - 1]] + bt[index_array[i]];
      }
    }
    for (t = at[index_array[0]]; t < bt_total; ) {
      var hrr = -9999;
      var temp;
      var loc;
      for (i = 0; i < at.length; i++) {
        if (at[index_array[i]] <= t && checked[i] != true) {
          temp =
            (bt[index_array[i]] + (t - at[index_array[i]])) /
            bt[index_array[i]];
          if (hrr < temp) {
            hrr = temp;
            loc = i;
          }
        }
      }
      // console.log(loc);
      t += bt[index_array[loc]];
      wt[index_array[loc]] = t - at[index_array[loc]] - bt[index_array[loc]];
      tat[index_array[loc]] = t - at[index_array[loc]];
      tat_total += tat[index_array[loc]];
      checked[loc] = true;
      wt_total += wt[index_array[loc]];
    }
  }

  var output = new Array(n);
  for (let i = 0; i < n; i++) {
    var col = new Array(6);
    col[0] = at[i];
    col[1] = bt[i];
    col[2] = ct[i];
    col[3] = tat[i];
    col[4] = wt[i];
    col[5] = i + 1;
    output[i] = col;
  }
  // console.log('final output', output);
  console.log('from hrrn');
  return output;
}
// alert('hrrn');

// 0->at
// 1->bt
// 2->ct
// 3->tat
// 4->wt
// 5->index
