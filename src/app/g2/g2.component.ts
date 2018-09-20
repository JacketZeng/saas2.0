import { Component, OnInit } from '@angular/core';
const DataSet = require('@antv/data-set');
@Component({
    selector: 'app-g2',
    templateUrl: './g2.component.html',
    styleUrls: ['./g2.component.css']
})
export class G2Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    forceFit: boolean = true;
    height: number = 400;
    data = data;
    scale = scale;

    click(ev,chart){
        console.log(ev);
        console.log(chart);
    }

}

// const data = [
//     { year: '1951 年', sales: 38 },
//     { year: '1952 年', sales: 52 },
//     { year: '1956 年', sales: 61 },
//     { year: '1957 年', sales: 145 },
//     { year: '1958 年', sales: 48 },
//     { year: '1959 年', sales: 38 },
//     { year: '1960 年', sales: 38 },
//     { year: '1962 年', sales: 38 },
// ];

// const scale = [{
//     dataKey: 'sales',
//     tickInterval: 20,
// }];



const sourceData = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 },
  ];
  
  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
  });
  const data = dv.rows;
  
  const scale = [{
    dataKey: 'month',
    min: 0,
    max: 1,
  }];

